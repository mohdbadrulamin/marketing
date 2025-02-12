export async function loadSection(sectionName) {
    try {
        const response = await fetch(`./sections/${sectionName}.html`);
        if (!response.ok) {
            throw new Error(`Failed to load section: ${sectionName}`);
        }
        const html = await response.text();
        const container = document.getElementById(sectionName);
        if (container) {
            container.innerHTML = html;
        }
    } catch (error) {
        console.error(`Error loading section ${sectionName}:`, error);
    }
}
