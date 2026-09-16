const characters = [
    { name: "Iron Man", category: "avengers", desc: "Genius billionaire Tony Stark in his high-tech armor." },
    { name: "Captain America", category: "avengers", desc: "The First Avenger, a super-soldier with an unbreakable shield." },
    { name: "Thanos", category: "villains", desc: "The Mad Titan who sought to balance the universe." },
    { name: "Loki", category: "villains", desc: "The God of Mischief, brother of Thor." },
    { name: "Galactus", category: "cosmic", desc: "The devourer of worlds, a primal cosmic force." },
    { name: "Silver Surfer", category: "cosmic", desc: "Herald of Galactus who travels the stars on a cosmic board." }
];

function showCategory(category) {
    const list = document.getElementById('character-list');
    const title = document.getElementById('category-title');
    list.innerHTML = '';
    
    title.innerText = category === 'all' ? 'All Characters' : category.toUpperCase();

    const filtered = category === 'all' ? characters : characters.filter(c => c.category === category);

    filtered.forEach(char => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<h3>${char.name}</h3><p>${char.desc}</p><button onclick="alert('Learn more about ${char.name}!')">View Details</button>`;
        list.appendChild(div);
    });
}

// Initial load
showCategory('all');
