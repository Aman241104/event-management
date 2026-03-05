import os
import re
import urllib.request
from concurrent.futures import ThreadPoolExecutor

good_ids = [
    "1511578314322-379afb476865", # 200
    "1492684223066-81342ee5ff30", # verified
]

def check_url(url):
    try:
        req = urllib.request.Request(url, method='HEAD')
        with urllib.request.urlopen(req) as response:
            return response.status == 200
    except Exception:
        return False

pattern = re.compile(r'https://images\.unsplash\.com/photo-([a-zA-Z0-9-]+)')

files = []
for root, _, filenames in os.walk('src'):
    for filename in filenames:
        if filename.endswith('.tsx') or filename.endswith('.ts'):
            files.append(os.path.join(root, filename))

unique_ids = set()
for f in files:
    with open(f, 'r') as file:
        content = file.read()
        for match in pattern.finditer(content):
            unique_ids.add(match.group(1))

print("Testing IDs...")
bad_ids = []
good_verified = []

with ThreadPoolExecutor(max_workers=10) as executor:
    results = executor.map(lambda uid: (uid, check_url(f"https://images.unsplash.com/photo-{uid}")), unique_ids)
    for uid, is_good in results:
        if is_good:
            good_verified.append(uid)
            print(f"Good: {uid}")
        else:
            bad_ids.append(uid)
            print(f"Bad: {uid}")

print(f"\nFound {len(bad_ids)} bad IDs. Replacing them...")

if not good_verified:
    good_verified = ["1511578314322-379afb476865"] # fallback

# Replace bad IDs with good ones, cycling through good_verified
for i, bad_id in enumerate(bad_ids):
    replacement = good_verified[i % len(good_verified)]
    print(f"Replacing {bad_id} -> {replacement}")
    os.system(f"find src -type f -name '*.tsx' -exec sed -i 's/{bad_id}/{replacement}/g' {{}} +")
    os.system(f"find src -type f -name '*.ts' -exec sed -i 's/{bad_id}/{replacement}/g' {{}} +")

print("Done!")
