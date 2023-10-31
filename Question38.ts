function describeCity(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describeCity("Lahore", "Pakistan"); // Lahore is in Pakistan
describeCity("Lightwater");          // Lightwater is in Unknown (default)
describeCity("Makkah", "Saudi Arabia"); // Makkah is in Saudi Arabia

export{};