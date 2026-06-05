const fs = require('fs');

const file = 'projects.html';
let content = fs.readFileSync(file, 'utf8');

const startMarker = '<div class="col-lg-6">';
const itemsStartIdx = content.indexOf(startMarker);
const itemsEndStr = '<div class="col-xxl-12">';
const itemsEndIdx = content.indexOf(itemsEndStr, itemsStartIdx);

if (itemsStartIdx !== -1 && itemsEndIdx !== -1) {
    const itemsHtml = content.substring(itemsStartIdx, itemsEndIdx);
    
    // Split items
    const rawItems = itemsHtml.split('<div class="col-lg-6">');
    const items = rawItems.filter(i => i.trim() !== '').map(i => '<div class="col-lg-6">' + i);
    
    // Categorize
    const htmlItems = [];
    const reactItems = [];
    const collabItems = [];
    
    items.forEach(item => {
        const text = item.toLowerCase();
        if (text.includes('react')) {
            reactItems.push(item);
        } else if (text.includes('hyip') || text.includes('banking') || text.includes('pay per click') || text.includes('admin') || text.includes('dashboard')) {
            collabItems.push(item);
        } else {
            htmlItems.push(item);
        }
    });

    // We also want to include ALL items in the All tab
    const allItemsHtml = items.join('');
    const htmlItemsHtml = htmlItems.join('');
    const reactItemsHtml = reactItems.join('');
    const collabItemsHtml = collabItems.join('');

    // Tabs HTML
    const tabsHtml = `
                <div class="sec-head bord-thin-bottom pb-20 mb-30 d-flex align-items-center justify-content-between">
                    <h4 class="sub-title fz-28">More Projects</h4>
                    <ul class="nav nav-tabs portfolio-filter" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="protfolio-tab" data-bs-toggle="tab"
                                data-bs-target="#protfolio-tab-pane" type="button" role="tab"
                                aria-controls="protfolio-tab-pane" aria-selected="true">All</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                data-bs-target="#profile-tab-pane" type="button" role="tab"
                                aria-controls="profile-tab-pane" aria-selected="false">HTML Template</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="react-tab" data-bs-toggle="tab"
                                data-bs-target="#react-tab-pane" type="button" role="tab" aria-controls="react-tab-pane"
                                aria-selected="false">Frontend and Backend</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab"
                                data-bs-target="#contact-tab-pane" type="button" role="tab"
                                aria-controls="contact-tab-pane" aria-selected="false">Frontend & Backend Collaboration</button>
                        </li>
                    </ul>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-11">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="protfolio-tab-pane" role="tabpanel" aria-labelledby="protfolio-tab" tabindex="0">
                                <div class="row">
${allItemsHtml}
                                </div>
                            </div>
                            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                <div class="row">
${htmlItemsHtml}
                                </div>
                            </div>
                            <div class="tab-pane fade" id="react-tab-pane" role="tabpanel" aria-labelledby="react-tab" tabindex="0">
                                <div class="row">
${reactItemsHtml}
                                </div>
                            </div>
                            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                <div class="row">
${collabItemsHtml}
                                </div>
                            </div>
                        </div>
`;

    // Replace the old grid with the new tabs structure
    const toReplaceStart = content.indexOf('<div class="row justify-content-center">');
    // Note: The previous itemsEndIdx points to '<div class="col-xxl-12">'. We should find the closing tags of the row/container.
    // Actually, in projects.html, lines 126-623:
    // <div class="row justify-content-center">
    //    <div class="col-lg-11">
    //        <div class="row">
    //             ... items ...
    //        <div class="col-xxl-12">
    // We can just replace from `toReplaceStart` to `itemsEndIdx` with our new HTML.
    
    const newContent = content.substring(0, toReplaceStart) + tabsHtml + content.substring(itemsEndIdx);

    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Successfully updated projects.html with tabs.');
} else {
    console.error('Could not find items to replace.');
}
