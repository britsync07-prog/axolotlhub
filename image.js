import fs from 'fs';
import path from 'path';
import axios from 'axios';
import sharp from 'sharp';
import google from 'googlethis';

// Target both the 'out' and 'public' morph folders
const TARGET_DIRS = [
    path.join(process.cwd(), 'out', 'images', 'morphs'),
    path.join(process.cwd(), 'public', 'images', 'morphs')
];

// Domains that block bots or send HTML instead of images
const BAD_DOMAINS = ['tiktok.com', 'instagram.com', 'facebook.com', 'fbsbx.com', 'lookaside'];

async function processImages() {
    for (const dir of TARGET_DIRS) {
        if (!fs.existsSync(dir)) {
            console.log(`⚠️ Directory not found, skipping: ${dir}`);
            continue;
        }

        const files = fs.readdirSync(dir);
        // Only target .jpg files to avoid overwriting logos
        const jpgFiles = files.filter(file => file.toLowerCase().endsWith('.jpg'));

        console.log(`\n📂 Scanning directory: ${dir}`);
        console.log(`🔍 Found ${jpgFiles.length} .jpg images.`);

        for (const file of jpgFiles) {
            const filePath = path.join(dir, file);
            const baseName = path.basename(file, '.jpg');
            const searchQuery = `${baseName.replace(/-/g, ' ')} axolotl`;
            
            console.log(`\n⏳ Processing: ${file}`);
            console.log(`🔎 Searching: "${searchQuery}"`);

            try {
                const images = await google.image(searchQuery, { safe: false });

                if (!images || images.length === 0) {
                    console.log(`⚠️ No images found online. Skipping.`);
                    continue;
                }

                // Filter for landscape images AND block bad domains
                const validImages = images.filter(img => {
                    const isLandscape = img.width > img.height;
                    const isBadDomain = BAD_DOMAINS.some(domain => img.url.includes(domain));
                    return isLandscape && !isBadDomain;
                });

                if (validImages.length === 0) {
                     console.log(`⚠️ No valid landscape images found after filtering bad domains.`);
                     continue;
                }

                let success = false;

                // RETRY LOGIC: Try up to 5 valid images until one works
                const maxAttempts = Math.min(validImages.length, 5);
                for (let i = 0; i < maxAttempts; i++) {
                    const targetImageUrl = validImages[i].url;
                    console.log(`⬇️ Attempt ${i + 1}: Downloading ${targetImageUrl}`);

                    try {
                        const response = await axios.get(targetImageUrl, { 
                            responseType: 'arraybuffer',
                            timeout: 10000,
                            // Spoof a real web browser to bypass basic blocks
                            headers: {
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
                            }
                        });
                        
                        const imageBuffer = Buffer.from(response.data, 'binary');
                        const tempFilePath = path.join(dir, `temp-${file}`);

                        // Process for SEO
                        await sharp(imageBuffer)
                            .jpeg({ quality: 80, mozjpeg: true })
                            .toFile(tempFilePath);

                        // Replace original
                        fs.renameSync(tempFilePath, filePath);
                        console.log(`✅ Success! Replaced ${file}`);
                        success = true;
                        
                        break; // Break out of the retry loop because we succeeded

                    } catch (err) {
                        console.log(`❌ Attempt ${i + 1} failed: ${err.message}. Trying next image...`);
                        // Clean up temp file if it failed midway
                        const tempFilePath = path.join(dir, `temp-${file}`);
                        if (fs.existsSync(tempFilePath)) fs.unlinkSync(tempFilePath);
                    }
                }

                if (!success) {
                    console.log(`🚨 All attempts failed for ${file}. Kept original image.`);
                }

            } catch (error) {
                console.error(`❌ Search completely failed for ${file}: ${error.message}`);
            }
        }
    }
    console.log(`\n🎉 All directories processed!`);
}

processImages();
