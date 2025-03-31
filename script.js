function toggleMenu() {
  let menu = document.getElementById("rightMenu");
  let icon = document.getElementById("menu-icon");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    icon.src = "https://i.ibb.co/rGxFYMRv/icons8-squared-menu-30.png";
  } 
  else {
    menu.style.display = "block";
    icon.src = "https://i.ibb.co/JWM7Pxd0/icons8-close-window-30.png";
  }
}

let plants = [
    {
        id: 1,
        name: "Lonely Planter",
        growthStage: 0,
        water: 0,
        weeds: 0,
        bugs: 0,
        image: "empty-planter.png",
        src: "assets/empty-planter.png"
    },
    {
        id: 2,
        name: "Seedling",
        growthStage: 1,
        water: 0,
        weeds: 0,
        bugs: 0,
        image: "seed.png",
        src: "assets/seed.png"
    },
    {
        id: 3,
        name: "Sprout",
        growthStage: 2,
        water: 0,
        weeds: 0,
        bugs: 0,
        image: "sprout.png",
        src: "assets/sprout.png"
    },
    {
        id: 4,
        name: "Lavender",
        growthStage: 3,
        water: 0,
        weeds: 50,
        bugs: 0,
        image: "lavender-s1.png",
        src: "assets/lavender-s1.png"
    },
    {
        id: 5,
        name: "Lavender",
        growthStage: 4,
        water: 0,
        weeds: 25,
        bugs: 25,
        image: "lavender-s2.png",
        src: "assets/lavender-s2.png"
    },
    {
        id: 6,
        name: "Lavender",
        growthStage: 5,
        water: 0,
        weeds: 0,
        bugs: 50,
        image: "lavender-s3.png",
        src: "assets/lavender-s3.png"
    },
    {
        id: 7,
        name: "Calla Lily",
        growthStage: 3,
        water: 0,
        weeds: 50,
        bugs: 25,
        image: "calla-lily-s1.png",
        src: "assets/calla-lily-s1.png"
    },
    {
        id: 8,
        name: "Calla Lily",
        growthStage: 4,
        water: 0,
        weeds: 25,
        bugs: 50,
        image: "calla-lily-s2.png",
        src: "assets/calla-lily-s2.png"
    },
    {
        id: 9,
        name: "Calla Lily",
        growthStage: 5,
        water: 0,
        weeds: 0,
        bugs: 75,
        image: "calla-lily-s3.png",
        src: "assets/calla-lily-s3.png"
    },
    {
        id: 10,
        name: "Cannas Tropicanna",
        growthStage: 3,
        water: 0,
        weeds: 75,
        bugs: 0,
        image: "cannas-tropicanna-s1.png",
        src: "assets/cannas-tropicanna-s1.png"
    },
    {
        id: 11,
        name: "Cannas Tropicanna",
        growthStage: 4,
        water: 0,
        weeds: 50,
        bugs: 25,
        image: "cannas-tropicanna-s2.png",
        src: "assets/cannas-tropicanna-s2.png"
    },
    {
        id: 12,
        name: "Cannas Tropicanna",
        growthStage: 5,
        water: 0,
        weeds: 25,
        bugs: 50,
        image: "cannas-tropicanna-s3.png",
        src: "assets/cannas-tropicanna-s3.png"
    },
    {
        id: 13,
        name: "Flash Caladium",
        growthStage: 3,
        water: 0,
        weeds: 50,
        bugs: 0,
        image: "flash-caladium-s1.png",
        src: "assets/flash-caladium-s1.png"
    },
    {
        id: 14,
        name: "Flash Caladium",
        growthStage: 4,
        water: 0,
        weeds: 25,
        bugs: 25,
        image: "flash-caladium-s2.png",
        src: "assets/flash-caladium-s2.png"
    },
    {
        id: 15,
        name: "Flash Caladium",
        growthStage: 5,
        water: 0,
        weeds: 0,
        bugs: 50,
        image: "flash-caladium-s3.png",
        src: "assets/flash-caladium-s3.png"
    },
    {
        id: 16,
        name: "Hosta Patriot",
        growthStage: 3,
        water: 0,
        weeds: 50,
        bugs: 25,
        image: "hosta-patriot-s1.png",
        src: "assets/hosta-patriot-s1.png"
    },
    {
        id: 17,
        name: "Hosta Patriot",
        growthStage: 4,
        water: 0,
        weeds: 25,
        bugs: 50,
        image: "hosta-patriot-s2.png",
        src: "assets/hosta-patriot-s2.png"
    },
    {
        id: 18,
        name: "Hosta Patriot",
        growthStage: 5,
        water: 0,
        weeds: 0,
        bugs: 75,
        image: "hosta-patriot-s3.png",
        src: "assets/hosta-patriot-s3.png"
    },
    {
        id: 19,
        name: "Oriental Lily",
        growthStage: 3,
        water: 0,
        weeds: 50,
        bugs: 0,
        image: "oriental-lily-s1.png",
        src: "assets/oriental-lily-s1.png"
    },
    {
        id: 20,
        name: "Oriental Lily",
        growthStage: 4,
        water: 0,
        weeds: 25,
        bugs: 25,
        image: "oriental-lily-s2.png",
        src: "assets/oriental-lily-s2.png"
    },
    {
        id: 21,
        name: "Oriental Lily",
        growthStage: 5,
        water: 0,
        weeds: 0,
        bugs: 50,
        image: "oriental-lily-s3.png",
        src: "assets/oriental-lily-s3.png"
    }
    
];

document.addEventListener("DOMContentLoaded", function () {
    const plantElements = document.querySelectorAll(".planter img");

    plantElements.forEach(plant => {
        plant.addEventListener("click", function (event) {

            const plantSrc = this.src;
            const planterId = plant.parentElement.id;
            const plantData = plants.find(p => p.src === plantSrc);

            if (plantData) {
                openInfoCard(planterId, plantData, event);
            }
        });
    });
});

function openInfoCard(planterId, plantData, event) {
    const infoCard = document.getElementById("info-card");

    document.getElementById("plant-name").textContent = plantData.name;
    document.getElementById("growth-stage").textContent = `${plantData.growthStage}`;
    document.getElementById("plant-image").src = plantData.src;

    const plantElement = document.getElementById(`${planterId}`);

    const planterWaterMeter = plantElement.querySelector(".water-meter");
    const planterWeedMeter = plantElement.querySelector(".weed-meter");
    const planterBugMeter = plantElement.querySelector(".bug-meter");

    document.getElementById("info-card-water-meter").value = planterWaterMeter.value;
    document.getElementById("info-card-weed-meter").value = planterWeedMeter.value;
    document.getElementById("info-card-bug-meter").value = planterBugMeter.value;

    const cardWidth = infoCard.offsetWidth;
    const cardHeight = infoCard.offsetHeight;

    let x = event.pageX;
    let y = event.pageY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (x + cardWidth > windowWidth) {
        x -= cardWidth + 20; 
    } 
    else {
        x += 20; 
    }

    if (y + cardHeight > windowHeight) {
        y -= cardHeight + 20; 
    } 
    else {
        y += 20;
    }

    x = Math.max(0, Math.min(x, windowWidth - cardWidth));
    y = Math.max(0, Math.min(y, windowHeight - cardHeight));

    infoCard.style.left = `${x}px`;
    infoCard.style.top = `${y}px`;
    infoCard.style.display = "block";
}

document.addEventListener("click", function (event) {
    let infoCard = document.getElementById("info-card");

    if (infoCard.style.display === "block") {

        if (!infoCard.contains(event.target) && !event.target.closest(".planter img")) {
            closeInfoCard();
        }
    }
});

function closeInfoCard() {
    document.getElementById("info-card").style.display = "none";
}

const tools = document.querySelectorAll(".tool");

tools.forEach(tool => {
    tool.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("tool", tool.id); 
        // tool.style.cursor = "grabbing";
    });
});

const planters = document.querySelectorAll(".planter");

planters.forEach(planter => {
    planter.addEventListener("dragover", function (event) {
        event.preventDefault();
        // planter.style.cursor = "grabbing";
    });

    planter.addEventListener("drop", function (event) {
        event.preventDefault();

        const toolId = event.dataTransfer.getData("tool");

        // planter.style.cursor = "grab";

        const planterId = planter.id.replace("planter-", ""); 

        const planterSrc = planter.querySelector("img").getAttribute("src");
        const currentPlanterImg = decodeURIComponent(planterSrc).split('/').pop().split('?')[0];

        const plantData = plants.find(p => p.image === currentPlanterImg);
        
        if (!plantData) {
            return;
        }

        if (toolId === "seed-pack") {
            seedPlant(plantData, planterId);
        } 
        else if (toolId === "water-can") {
            waterPlant(plantData, planterId);
        } 
        else if (toolId === "weed-tool") {
            weedPlant(plantData, planterId);
        } 
        else if (toolId === "pest-spray") {
            pestPlant(plantData, planterId);
        }
    });
});

function seedPlant(plantData, planterId) {
    updatePlantDisplay(plantData, planterId);
}

function waterPlant(plantData, planterId) {
    const plantElement = document.getElementById(`planter-${planterId}`);
    const cardWaterMeter = document.getElementById("info-card-water-meter");
    const planterWaterMeter = plantElement.querySelector(".water-meter");

    if (planterWaterMeter.value < 100) {
        planterWaterMeter.value = Math.min(100, Number(planterWaterMeter.value) + 50);
        updatePlantDisplay(plantData, planterId);
    }
}

function weedPlant(plantData, planterId) {
    const plantElement = document.getElementById(`planter-${planterId}`);
    const cardWeedMeter = document.getElementById("info-card-weed-meter");
    const planterWeedMeter = plantElement.querySelector(".weed-meter");

    if (planterWeedMeter.value > 0) {
        planterWeedMeter.value = Math.max(0, Number(planterWeedMeter.value) - 100);
        updatePlantDisplay(plantData, planterId);
    }
}

function pestPlant(plantData, planterId) {
    const plantElement = document.getElementById(`planter-${planterId}`);
    const cardBugMeter = document.getElementById("info-card-bug-meter");
    const planterBugMeter = plantElement.querySelector(".bug-meter");

    if (planterBugMeter.value > 0) {
        planterBugMeter.value = Math.max(0, Number(planterBugMeter.value) - 100);
        updatePlantDisplay(plantData, planterId);
    }
}

const plantWaterRequirements = {
    "lavender": { stage1: 25, stage2: 50 },
    "calla-lily": { stage1: 50, stage2: 75 },
    "cannas-tropicanna": { stage1: 75, stage2: 100 },
    "flash-caladium": { stage1: 50, stage2: 75 },
    "hosta-patriot": { stage1: 25, stage2: 50 },
    "oriental-lily": { stage1: 25, stage2: 50 }
};

function updatePlantDisplay(plantData, planterId) {
    const plantElement = document.getElementById(`planter-${planterId}`);

    const infoCard = document.getElementById("info-card");
    const plantName = document.getElementById("plant-name");
    const growthStage = document.getElementById("growth-stage");
    const plantImage = document.getElementById("plant-image");
    const plantType = document.getElementById("plant-type");

    const cardWaterMeter = document.getElementById("info-card-water-meter");
    const cardWeedMeter = document.getElementById("info-card-weed-meter");
    const cardBugMeter = document.getElementById("info-card-bug-meter");

    const planterWaterMeter = plantElement.querySelector(".water-meter");
    const planterWeedMeter = plantElement.querySelector(".weed-meter");
    const planterBugMeter = plantElement.querySelector(".bug-meter");

    growthStage.textContent = plantData.growthStage;

    if (Number(growthStage.textContent) === 0) {
        growthStage.textContent = "1";

        plantData = plants.find(p => p.growthStage === Number(growthStage.textContent));

        plantElement.querySelector("img").setAttribute("src", plantData.src);
        plantImage.src = plantData.src;
        planterWaterMeter.value = plantData.water;
        planterWeedMeter.value = plantData.weeds;
        planterBugMeter.value = plantData.bugs;
        plantType.textContent = "";
    } 
    else if (planterWaterMeter.value >= 40 && Number(growthStage.textContent) === 1) {
        growthStage.textContent = "2";

        plantData = plants.find(p => p.growthStage === Number(growthStage.textContent));

        plantElement.querySelector("img").setAttribute("src", plantData.src);
        plantImage.src = plantData.src;
        planterWaterMeter.value = plantData.water;
        planterWeedMeter.value = plantData.weeds;
        planterBugMeter.value = plantData.bugs;
        plantType.textContent = "";
    } 
    else if (planterWaterMeter.value >= 60 && Number(growthStage.textContent) === 2) {
        if (plantType.textContent === "") {
            let plantOptions = ["lavender", "calla-lily", "cannas-tropicanna", "flash-caladium", "hosta-patriot", "oriental-lily"];
            let randomIndex = Math.floor(Math.random() * plantOptions.length);
            plantType.textContent = `${plantOptions[randomIndex]}`;
        }
        growthStage.textContent = "3";

        plantData = plants.find(p => p.image === `${plantType.textContent}-s1.png`);

        plantElement.querySelector("img").setAttribute("src", plantData.src);
        plantImage.src = plantData.src;
        planterWaterMeter.value = plantData.water;
        planterWeedMeter.value = plantData.weeds;
        planterBugMeter.value = plantData.bugs;
    }
    else if (plantType.textContent !== "" && plantWaterRequirements[plantType.textContent]) {
        let req = plantWaterRequirements[plantType.textContent];

        if (Number(growthStage.textContent) === 3 && planterWaterMeter.value >= req.stage1 && planterWeedMeter.value === 0 && planterBugMeter.value === 0) {
            growthStage.textContent = "4";

            plantData = plants.find(p => p.image === `${plantType.textContent}-s2.png`);

            plantElement.querySelector("img").setAttribute("src", plantData.src);
            plantImage.src = plantData.src;
            planterWaterMeter.value = plantData.water;
            planterWeedMeter.value = plantData.weeds;
            planterBugMeter.value = plantData.bugs;
        } 
        else if (Number(growthStage.textContent) === 4 && planterWaterMeter.value >= req.stage2 && planterWeedMeter.value === 0 && planterBugMeter.value === 0) {
            growthStage.textContent = "5";

            plantData = plants.find(p => p.image === `${plantType.textContent}-s3.png`);

            plantElement.querySelector("img").setAttribute("src", plantData.src);
            plantImage.src = plantData.src;
            planterWaterMeter.value = plantData.water;
            planterWeedMeter.value = plantData.weeds;
            planterBugMeter.value = plantData.bugs;
        }
    }

    plantName.textContent = plantData.name;
    growthStage.textContent = `${plantData.growthStage}`;
    cardWaterMeter.value = planterWaterMeter.value;
    cardWeedMeter.value = planterWeedMeter.value;
    cardBugMeter.value = planterBugMeter.value;
    plantImage.src = plantData.src;
}
