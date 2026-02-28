// Initialize the map
function initMap() {
    // Mock Google Maps behavior if API is missing
    if (typeof google === 'undefined' || !google.maps) {
        console.warn("Google Maps API not loaded");
        const mapDiv = document.getElementById("housingMap");
        if (mapDiv) {
            mapDiv.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:white;background:rgba(255,255,255,0.1);">Map Preview (API Key Required)</div>';
        }
        return;
    }

    const map = new google.maps.Map(document.getElementById("housingMap"), {
        center: { lat: 34.0522, lng: -118.2437 }, // Los Angeles coordinates
        zoom: 12,
    });

    // Add markers for housing options (example)
    const housingLocations = [
        { lat: 34.0522, lng: -118.2437, title: "Downtown Shelter" },
        { lat: 34.0611, lng: -118.2994, title: "Westlake Transitional Housing" },
        { lat: 34.0905, lng: -118.3771, title: "Hollywood Affordable Apartments" },
    ];

    housingLocations.forEach((location) => {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map,
            title: location.title,
        });
    });
}

// Load the map when the page is ready
// window.onload = initMap; // Removed to avoid conflict, relying on callback or manual init if script loads

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
