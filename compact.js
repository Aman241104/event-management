const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Reduce section padding
code = code.replace(/py-20 md:py-32/g, 'py-10 md:py-16');
code = code.replace(/py-24 md:py-40/g, 'py-12 md:py-20');
code = code.replace(/py-24 md:py-48/g, 'py-12 md:py-20');
code = code.replace(/py-16 md:py-24/g, 'py-8 md:py-12');
code = code.replace(/py-20/g, 'py-10');
code = code.replace(/py-24/g, 'py-12');
code = code.replace(/pt-20 pb-4/g, 'pt-10 pb-2');
code = code.replace(/pb-20 pt-4/g, 'pb-10 pt-2');

// Reduce margins
code = code.replace(/mb-24/g, 'mb-10');
code = code.replace(/mb-16/g, 'mb-8');
code = code.replace(/mb-12/g, 'mb-6');
code = code.replace(/mb-10/g, 'mb-5');
code = code.replace(/mt-24/g, 'mt-10');
code = code.replace(/mt-20/g, 'mt-8');
code = code.replace(/mt-16/g, 'mt-8');
code = code.replace(/mt-12/g, 'mt-6');

// Reduce gaps
code = code.replace(/gap-12/g, 'gap-6');
code = code.replace(/gap-10/g, 'gap-5');
code = code.replace(/gap-8/g, 'gap-4');
code = code.replace(/gap-6/g, 'gap-3');

// Reduce heights
code = code.replace(/h-screen/g, 'h-[75vh]');
code = code.replace(/min-h-screen/g, 'min-h-[75vh]');

// Specific component paddings
code = code.replace(/px-10 py-16 md:px-12 md:py-20/g, 'px-6 py-8 md:px-8 md:py-10');
code = code.replace(/p-10 md:p-12/g, 'p-6 md:p-8');
code = code.replace(/p-8 md:p-10/g, 'p-5 md:p-6');

// Typography adjustments (optional, but requested "as compact as possible")
code = code.replace(/text-4xl md:text-5xl lg:text-7xl/g, 'text-3xl md:text-4xl lg:text-5xl');
code = code.replace(/text-4xl md:text-5xl lg:text-6xl/g, 'text-3xl md:text-4xl lg:text-5xl');
code = code.replace(/text-4xl md:text-7xl lg:text-\[8\.5rem\]/g, 'text-3xl md:text-5xl lg:text-6xl');
code = code.replace(/text-5xl md:text-7xl lg:text-\[10\.5rem\]/g, 'text-4xl md:text-6xl lg:text-[7rem]');
code = code.replace(/text-6xl md:text-8xl lg:text-\[11rem\]/g, 'text-5xl md:text-6xl lg:text-[7rem]');
code = code.replace(/text-4xl md:text-7xl lg:text-\[8rem\]/g, 'text-3xl md:text-5xl lg:text-6xl');

fs.writeFileSync('src/app/page.tsx', code);
console.log('Compact script finished');
