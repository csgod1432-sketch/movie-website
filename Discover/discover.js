const realMovies = [
    {
        id: "the-dark-knight",
        title: "The Dark Knight",
        imdbRating: 9.0,
        popularity: 3,
        year: "2008",
        releaseDate: "18 Jul 2008",
        genres: ["Action", "Crime", "Drama"],
        runtime: "2h 32m",
        director: "Christopher Nolan",
        cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
        synopsis: "Batman, Lieutenant James Gordon and District Attorney Harvey Dent form an alliance to bring organized crime under control in Gotham City. Their campaign is thrown into chaos by the Joker, a criminal mastermind who tests the limits of the city and its heroes.",
        country: "United States, United Kingdom",
        language: "English",
        production: ["Warner Bros. Pictures", "Legendary Pictures", "Syncopy"],
        tagline: "Why so serious?",
        wikipedia: "https://en.wikipedia.org/wiki/The_Dark_Knight",
    },
    {
        id: "inception",
        title: "Inception",
        imdbRating: 8.8,
        popularity: 5,
        year: "2010",
        releaseDate: "16 Jul 2010",
        genres: ["Action", "Adventure", "Sci-Fi", "Thriller"],
        runtime: "2h 28m",
        director: "Christopher Nolan",
        cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
        synopsis: "Dom Cobb is a skilled thief who enters people's dreams to steal secrets. Offered a chance to return to his children, he takes on an almost impossible assignment: plant an idea in someone's mind without being detected.",
        country: "United States, United Kingdom",
        language: "English, Japanese, French",
        production: ["Warner Bros. Pictures", "Legendary Pictures", "Syncopy"],
        tagline: "Your mind is the scene of the crime.",
        wikipedia: "https://en.wikipedia.org/wiki/Inception",
    },
    {
        id: "interstellar",
        title: "Interstellar",
        imdbRating: 8.7,
        popularity: 2,
        year: "2014",
        releaseDate: "07 Nov 2014",
        genres: ["Adventure", "Drama", "Sci-Fi"],
        runtime: "2h 49m",
        director: "Christopher Nolan",
        cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        synopsis: "With Earth becoming increasingly difficult to inhabit, former pilot Cooper joins a team of explorers on a mission through a newly discovered wormhole. They search distant worlds for a future for humanity, while Cooper's family waits back home.",
        country: "United States, United Kingdom, Canada",
        language: "English",
        production: ["Paramount Pictures", "Warner Bros. Pictures", "Legendary Pictures", "Syncopy"],
        tagline: "Mankind was born on Earth. It was never meant to die here.",
        wikipedia: "https://en.wikipedia.org/wiki/Interstellar_(film)",
    },
    {
        id: "parasite",
        title: "Parasite",
        imdbRating: 8.5,
        popularity: 6,
        year: "2019",
        releaseDate: "30 May 2019",
        genres: ["Comedy", "Drama", "Thriller"],
        runtime: "2h 12m",
        director: "Bong Joon Ho",
        cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
        synopsis: "The struggling Kim family gradually finds work in the home of the wealthy Park family. As the two households' lives become entangled, an unexpected discovery turns their arrangement into a tense struggle for survival.",
        country: "South Korea",
        language: "Korean, English",
        production: ["Barunson E&A"],
        tagline: "Act like you own the place.",
        wikipedia: "https://en.wikipedia.org/wiki/Parasite_(2019_film)",
    },
    {
        id: "oppenheimer",
        title: "Oppenheimer",
        imdbRating: 8.3,
        popularity: 1,
        year: "2023",
        releaseDate: "21 Jul 2023",
        genres: ["Drama", "History"],
        runtime: "3h",
        director: "Christopher Nolan",
        cast: "Cillian Murphy, Emily Blunt, Robert Downey Jr.",
        synopsis: "Physicist J. Robert Oppenheimer leads the scientific effort behind the Manhattan Project during World War II. The film follows the work, moral consequences and political scrutiny surrounding the creation of the atomic bomb.",
        country: "United States, United Kingdom",
        language: "English",
        production: ["Universal Pictures", "Syncopy", "Atlas Entertainment"],
        tagline: "The world forever changes.",
        wikipedia: "https://en.wikipedia.org/wiki/Oppenheimer_(film)",
    },
    {
        id: "dune-part-two",
        title: "Dune: Part Two",
        imdbRating: 8.5,
        popularity: 4,
        year: "2024",
        releaseDate: "01 Mar 2024",
        genres: ["Action", "Adventure", "Sci-Fi"],
        runtime: "2h 46m",
        director: "Denis Villeneuve",
        cast: "Timothée Chalamet, Zendaya, Rebecca Ferguson",
        synopsis: "Paul Atreides joins Chani and the Fremen on Arrakis, seeking justice against the forces that destroyed his family. As he embraces the Fremen way of life, he faces a choice that could determine the future of the known universe.",
        country: "United States, Canada",
        language: "English",
        production: ["Legendary Pictures", "Warner Bros. Pictures"],
        tagline: "Long live the fighters.",
        wikipedia: "https://en.wikipedia.org/wiki/Dune:_Part_Two",
    },
    {
        id: "everything-everywhere-all-at-once",
        title: "Everything Everywhere All at Once",
        imdbRating: 7.8,
        popularity: 9,
        year: "2022",
        releaseDate: "25 Mar 2022",
        genres: ["Action", "Adventure", "Comedy", "Sci-Fi"],
        runtime: "2h 19m",
        director: "Daniel Kwan, Daniel Scheinert",
        cast: "Michelle Yeoh, Stephanie Hsu, Ke Huy Quan",
        synopsis: "Evelyn Wang is overwhelmed by work, family and a tax audit when she is pulled into an adventure across the multiverse. To protect the people she loves, she must connect with the many lives she could have lived.",
        country: "United States",
        language: "English, Mandarin, Cantonese",
        production: ["A24", "AGBO"],
        tagline: "The universe is so much bigger than you realize.",
        wikipedia: "https://en.wikipedia.org/wiki/Everything_Everywhere_All_at_Once",
    },
    {
        id: "spider-man-across-the-spider-verse",
        title: "Spider-Man: Across the Spider-Verse",
        imdbRating: 8.6,
        popularity: 7,
        year: "2023",
        releaseDate: "02 Jun 2023",
        genres: ["Action", "Adventure", "Animation", "Sci-Fi"],
        runtime: "2h 20m",
        director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
        cast: "Shameik Moore, Hailee Steinfeld, Brian Tyree Henry",
        synopsis: "Miles Morales reunites with Gwen Stacy and is swept into the multiverse, where he meets a society of Spider-People protecting every reality. When their views on a new threat clash, Miles sets out to protect the people he loves.",
        country: "United States",
        language: "English",
        production: ["Columbia Pictures", "Sony Pictures Animation", "Lord Miller"],
        tagline: "It's how you wear the mask that matters.",
        wikipedia: "https://en.wikipedia.org/wiki/Spider-Man:_Across_the_Spider-Verse",
    },
    {
        id: "rrr",
        title: "RRR",
        imdbRating: 7.8,
        popularity: 8,
        year: "2022",
        releaseDate: "25 Mar 2022",
        genres: ["Action", "Drama", "Indian"],
        runtime: "3h 7m",
        director: "S. S. Rajamouli",
        cast: "N. T. Rama Rao Jr., Ram Charan, Alia Bhatt",
        synopsis: "Set in 1920s India, this fictional story imagines the lives of revolutionary leaders Alluri Sitarama Raju and Komaram Bheem. Two men from very different worlds form a powerful friendship before joining the fight against British colonial rule.",
        country: "India",
        language: "Telugu",
        production: ["DVV Entertainment"],
        tagline: "Rise. Roar. Revolt.",
        wikipedia: "https://en.wikipedia.org/wiki/RRR",
    },
    {
        id: "12th-fail",
        title: "12th Fail",
        imdbRating: 8.8,
        popularity: 10,
        year: "2023",
        releaseDate: "27 Oct 2023",
        genres: ["Biography", "Drama", "Indian"],
        runtime: "2h 27m",
        director: "Vidhu Vinod Chopra",
        cast: "Vikrant Massey, Medha Shankr, Anant V. Joshi",
        synopsis: "Inspired by the life of IPS officer Manoj Kumar Sharma, the film follows a young man who returns to his studies after failing his school-leaving exams. He moves to Delhi and takes on the demanding journey toward the UPSC civil services examination.",
        country: "India",
        language: "Hindi",
        production: ["Vinod Chopra Films", "Zee Studios"],
        tagline: "Restart.",
        wikipedia: "https://en.wikipedia.org/wiki/12th_Fail",
    },
    {
        id: "drishyam-2",
        title: "Drishyam 2",
        imdbRating: 8.2,
        popularity: 11,
        year: "2022",
        releaseDate: "18 Nov 2022",
        genres: ["Drama", "Mystery", "Thriller", "Indian"],
        runtime: "2h 20m",
        director: "Abhishek Pathak",
        cast: "Ajay Devgn, Akshaye Khanna, Tabu",
        synopsis: "Seven years after the case involving Vijay Salgaonkar's family was closed, the past returns in an unexpected way. As the investigation reopens, Vijay must protect his family while the police search for new evidence.",
        country: "India",
        language: "Hindi",
        production: ["Panorama Studios", "Viacom18 Studios", "T-Series"],
        tagline: "The truth will come out.",
        wikipedia: "https://en.wikipedia.org/wiki/Drishyam_2_(2022_film)",
    },
    {
        id: "laapataa-ladies",
        title: "Laapataa Ladies",
        imdbRating: 8.3,
        popularity: 12,
        year: "2024",
        releaseDate: "01 Mar 2024",
        genres: ["Comedy", "Drama", "Indian"],
        runtime: "2h 3m",
        director: "Kiran Rao",
        cast: "Nitanshi Goel, Pratibha Ranta, Sparsh Shrivastava",
        synopsis: "In rural India in 2001, two newlywed brides wearing identical veils are accidentally swapped during a crowded train journey. The mix-up sends them on separate paths filled with new encounters, confusion and unexpected independence.",
        country: "India",
        language: "Hindi",
        production: ["Aamir Khan Productions", "Jio Studios"],
        tagline: "Two brides. One train. A delightful mix-up.",
        wikipedia: "https://en.wikipedia.org/wiki/Laapataa_Ladies",
    }
];

const catalogGenres = ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "History", "Indian", "Mystery", "Sci-Fi", "Thriller"];

const personPortraits = {
    "Christian Bale": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Christian_Bale-7837.jpg/330px-Christian_Bale-7837.jpg", "https://en.wikipedia.org/wiki/Christian_Bale"],
    "Heath Ledger": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Heath_Ledger_%282%29.jpg/330px-Heath_Ledger_%282%29.jpg", "https://en.wikipedia.org/wiki/Heath_Ledger"],
    "Aaron Eckhart": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Aaron_Eckhart_%2829830286295%29_%28cropped%29.jpg/330px-Aaron_Eckhart_%2829830286295%29_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Aaron_Eckhart"],
    "Christopher Nolan": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/ChristopherNolan-byPhilipRomano_%28cropped%29.jpg/330px-ChristopherNolan-byPhilipRomano_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Christopher_Nolan"],
    "Leonardo DiCaprio": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/LeoPTABFI191125-28_%28cropped%29.jpg/330px-LeoPTABFI191125-28_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Leonardo_DiCaprio"],
    "Joseph Gordon-Levitt": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Joseph_Gordon_Levitt_Sundance_Film_Festival_2026_%28cropped%29.jpg/330px-Joseph_Gordon_Levitt_Sundance_Film_Festival_2026_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Joseph_Gordon-Levitt"],
    "Elliot Page": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/ElliotPage-byPhilipRomano2.jpg/330px-ElliotPage-byPhilipRomano2.jpg", "https://en.wikipedia.org/wiki/Elliot_Page"],
    "Matthew McConaughey": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Matthew_McConaughey_at_the_2025_Toronto_Film_Festival_%283x4_cropped%29.jpg/330px-Matthew_McConaughey_at_the_2025_Toronto_Film_Festival_%283x4_cropped%29.jpg", "https://en.wikipedia.org/wiki/Matthew_McConaughey"],
    "Anne Hathaway": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/AnneHathaway-byPhilipRomano-Crop.jpg/330px-AnneHathaway-byPhilipRomano-Crop.jpg", "https://en.wikipedia.org/wiki/Anne_Hathaway"],
    "Jessica Chastain": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Jessica_Chastain-64631_%28cropped%29.jpg/330px-Jessica_Chastain-64631_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Jessica_Chastain"],
    "Song Kang-ho": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Song_Gangho_2016.jpg/330px-Song_Gangho_2016.jpg", "https://en.wikipedia.org/wiki/Song_Kang-ho"],
    "Lee Sun-kyun": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Lee_Seon-gun_in_Oct_2018.png/330px-Lee_Seon-gun_in_Oct_2018.png", "https://en.wikipedia.org/wiki/Lee_Sun-kyun"],
    "Cho Yeo-jeong": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Cho_Yeo-jeong_%28cropped%29.jpg/330px-Cho_Yeo-jeong_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Cho_Yeo-jeong"],
    "Bong Joon Ho": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Bong_Joon_Ho_-_Okja.jpg/330px-Bong_Joon_Ho_-_Okja.jpg", "https://en.wikipedia.org/wiki/Bong_Joon-ho"],
    "Cillian Murphy": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Cillian_Murphy_at_the_London_premier_of_Steve_in_September_2025_%28cropped%29.jpg/330px-Cillian_Murphy_at_the_London_premier_of_Steve_in_September_2025_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Cillian_Murphy"],
    "Emily Blunt": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Emily_Blunt_at_WWD_Style_Awards_2026-02.jpg/330px-Emily_Blunt_at_WWD_Style_Awards_2026-02.jpg", "https://en.wikipedia.org/wiki/Emily_Blunt"],
    "Robert Downey Jr.": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/RobertDowneyJr-byPhilipRomano7_%28cropped%29.jpg/330px-RobertDowneyJr-byPhilipRomano7_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Robert_Downey_Jr."],
    "Denis Villeneuve": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/DVilleneuveRFH121024_%2812_of_23%29_%2854061976489%29_%28cropped%29.jpg/330px-DVilleneuveRFH121024_%2812_of_23%29_%2854061976489%29_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Denis_Villeneuve"],
    "Timothée Chalamet": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Timoth%C3%A9e_Chalamet-63482_%28cropped%29.jpg/330px-Timoth%C3%A9e_Chalamet-63482_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Timoth%C3%A9e_Chalamet"],
    "Zendaya": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Zendaya-byPhilipRomano.jpg/330px-Zendaya-byPhilipRomano.jpg", "https://en.wikipedia.org/wiki/Zendaya"],
    "Rebecca Ferguson": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Rebecca_Ferguson_A_House_of_Dynamite-67_%28cropped2%29.jpg/330px-Rebecca_Ferguson_A_House_of_Dynamite-67_%28cropped2%29.jpg", "https://en.wikipedia.org/wiki/Rebecca_Ferguson"],
    "Michelle Yeoh": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Michelle_Yeoh-2268.jpg/330px-Michelle_Yeoh-2268.jpg", "https://en.wikipedia.org/wiki/Michelle_Yeoh"],
    "Stephanie Hsu": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Stephanie_Hsu_at_the_2024_Toronto_International_Film_Festival_%28cropped%29.jpg/330px-Stephanie_Hsu_at_the_2024_Toronto_International_Film_Festival_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Stephanie_Hsu"],
    "Ke Huy Quan": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Ke_Huy_Quan_at_the_White_House_%2852902390767%29_%28cropped%29.jpg/330px-Ke_Huy_Quan_at_the_White_House_%2852902390767%29_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Ke_Huy_Quan"],
    "Joaquim Dos Santos": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Joaquim_Dos_Santos_by_Gage_Skidmore.jpg/330px-Joaquim_Dos_Santos_by_Gage_Skidmore.jpg", "https://en.wikipedia.org/wiki/Joaquim_Dos_Santos"],
    "Kemp Powers": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Kemp_Powers_2023_03.png/330px-Kemp_Powers_2023_03.png", "https://en.wikipedia.org/wiki/Kemp_Powers"],
    "Shameik Moore": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Shameik_Moore_Photo_Op_GalaxyCon_Raleigh_2023.jpg/330px-Shameik_Moore_Photo_Op_GalaxyCon_Raleigh_2023.jpg", "https://en.wikipedia.org/wiki/Shameik_Moore"],
    "Hailee Steinfeld": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Hailee_Steinfeld_by_Gage_Skidmore.jpg/330px-Hailee_Steinfeld_by_Gage_Skidmore.jpg", "https://en.wikipedia.org/wiki/Hailee_Steinfeld"],
    "Brian Tyree Henry": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Brian_Tyree_Henry_by_Gage_Skidmore_2.jpg/330px-Brian_Tyree_Henry_by_Gage_Skidmore_2.jpg", "https://en.wikipedia.org/wiki/Brian_Tyree_Henry"],
    "S. S. Rajamouli": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/SS_Rajamouli%2C_2021.jpg/330px-SS_Rajamouli%2C_2021.jpg", "https://en.wikipedia.org/wiki/S._S._Rajamouli"],
    "N. T. Rama Rao Jr.": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/NTR_Jr._%282026%29.jpg/330px-NTR_Jr._%282026%29.jpg", "https://en.wikipedia.org/wiki/N._T._Rama_Rao_Jr."],
    "Ram Charan": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Ram_Charan_at_Game_Changer_trailer_launch.jpg/330px-Ram_Charan_at_Game_Changer_trailer_launch.jpg", "https://en.wikipedia.org/wiki/Ram_Charan"],
    "Alia Bhatt": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Alia_Bhatt_attends_at_the_2026_Cannes_Film_Festival_%28cropped%29_%28cropped%29.jpg/330px-Alia_Bhatt_attends_at_the_2026_Cannes_Film_Festival_%28cropped%29_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Alia_Bhatt"],
    "Vidhu Vinod Chopra": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Vidhu_Vinod_Chopra_2023_%28cropped%29.jpg/330px-Vidhu_Vinod_Chopra_2023_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Vidhu_Vinod_Chopra"],
    "Vikrant Massey": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Vikrant_Massey_in_the_closing_ceremony_of_IFFI_2025_%28cropped%29.jpg/330px-Vikrant_Massey_in_the_closing_ceremony_of_IFFI_2025_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Vikrant_Massey"],
    "Medha Shankr": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Medha_Shankr_spotted_in_Khar_%28cropped%29.jpg/330px-Medha_Shankr_spotted_in_Khar_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Medha_Shankr"],
    "Abhishek Pathak": [null, "https://en.wikipedia.org/wiki/Abhishek_Pathak"],
    "Ajay Devgn": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Ajay_Devgn_at_the_trailer_launch_of_Raid_2.jpg/330px-Ajay_Devgn_at_the_trailer_launch_of_Raid_2.jpg", "https://en.wikipedia.org/wiki/Ajay_Devgn"],
    "Akshaye Khanna": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Akshaye_Khanna_at_the_launch_of_GUJCON_CRF_and_PRF.jpg/330px-Akshaye_Khanna_at_the_launch_of_GUJCON_CRF_and_PRF.jpg", "https://en.wikipedia.org/wiki/Akshaye_Khanna"],
    "Tabu": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Tabu_in_2024.jpg/330px-Tabu_in_2024.jpg", "https://en.wikipedia.org/wiki/Tabu_(actress)"],
    "Kiran Rao": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Kiran_Rao_on_Day_3_of_Lakme_Fashion_Week_2017.jpg/330px-Kiran_Rao_on_Day_3_of_Lakme_Fashion_Week_2017.jpg", "https://en.wikipedia.org/wiki/Kiran_Rao"],
    "Nitanshi Goel": ["https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Nitanshi_Goel_snapped_outside_Krome_studios_in_Bandra.jpg/330px-Nitanshi_Goel_snapped_outside_Krome_studios_in_Bandra.jpg", "https://en.wikipedia.org/wiki/Nitanshi_Goel"],
    "Pratibha Ranta": ["https://upload.wikimedia.org/wikipedia/commons/8/8b/Pratibha_Ranta_snapped_at_EL%26N_London%27s_launch_in_Mumbai_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Pratibha_Ranta"],
    "Sparsh Shrivastava": ["https://upload.wikimedia.org/wikipedia/commons/0/0f/Sparsh_Shrivastava_at_the_premiere_of_his_film_Laapataa_Ladies_%28cropped%29.jpg", "https://en.wikipedia.org/wiki/Sparsh_Shrivastava"]
};

const characterNames = {
    "the-dark-knight": ["Bruce Wayne / Batman", "The Joker", "Harvey Dent"],
    "inception": ["Dom Cobb", "Arthur", "Ariadne"],
    "interstellar": ["Cooper", "Dr. Amelia Brand", "Murph Cooper"],
    "parasite": ["Kim Ki-taek", "Park Dong-ik", "Park Yeon-gyo"],
    "oppenheimer": ["J. Robert Oppenheimer", "Katherine Oppenheimer", "Lewis Strauss"],
    "dune-part-two": ["Paul Atreides", "Chani", "Lady Jessica"],
    "everything-everywhere-all-at-once": ["Evelyn Wang", "Joy Wang / Jobu Tupaki", "Waymond Wang"],
    "spider-man-across-the-spider-verse": ["Miles Morales / Spider-Man", "Gwen Stacy / Spider-Woman", "Jefferson Davis"],
    "rrr": ["Komaram Bheem", "Alluri Sitarama Raju", "Sita"],
    "12th-fail": ["Manoj Kumar Sharma", "Shraddha Joshi", "Pritam Pandey"],
    "drishyam-2": ["Vijay Salgaonkar", "IG Tarun Ahlawat", "Meera Deshmukh"],
    "laapataa-ladies": ["Phool", "Jaya", "Deepak"]
};

const movieImageRequests = new Map();
const watchlistStorageKey = "cinephile-watchlist";
const historyStorageKey = "cinephile-watch-history";

function getMovieImage(movie) {
    if (!movieImageRequests.has(movie.id)) {
        const article = new URL(movie.wikipedia).pathname.split("/").pop();
        const request = fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(article)}`, {
            headers: { Accept: "application/json" }
        }).then((response) => {
            if (!response.ok) throw new Error(`Wikipedia image request failed: ${response.status}`);
            return response.json();
        }).then((data) => data.originalimage?.source || data.thumbnail?.source || "").catch((error) => {
            console.error(`Could not load Wikipedia artwork for ${movie.title}.`, error);
            return "";
        });
        movieImageRequests.set(movie.id, request);
    }
    return movieImageRequests.get(movie.id);
}

function readMovieList(key) {
    try {
        const value = JSON.parse(localStorage.getItem(key) || "[]");
        if (Array.isArray(value) && value.every((item) => typeof item === "string")) return value;
        throw new Error(`Invalid saved movie list: ${key}`);
    } catch (error) {
        console.error(`Could not read ${key} from local storage.`, error);
        return [];
    }
}

function writeMovieList(key, items, status) {
    try {
        localStorage.setItem(key, JSON.stringify(items));
        if (status) status.textContent = "Your watchlist is saved on this device.";
        return true;
    } catch (error) {
        console.error(`Could not save ${key} to local storage.`, error);
        if (status) status.textContent = "Could not save your watchlist in this browser.";
        return false;
    }
}

function addToMovieHistory(movieId) {
    const history = readMovieList(historyStorageKey).filter((id) => id !== movieId);
    history.unshift(movieId);
    writeMovieList(historyStorageKey, history.slice(0, 12));
}

function createMovieCard(movie, watchlist, status, onWatchlistChange) {
    const card = document.createElement("article");
    card.className = "real-movie-card";
    const detailUrl = `movie-details.html?movie=${encodeURIComponent(movie.id)}`;

    const artworkLink = document.createElement("a");
    artworkLink.className = "real-movie-art";
    artworkLink.href = detailUrl;
    artworkLink.setAttribute("aria-label", `View ${movie.title} details`);
    const poster = document.createElement("img");
    poster.className = "real-movie-poster";
    poster.alt = `${movie.title} (${movie.year}) poster`;
    poster.loading = "lazy";
    poster.decoding = "async";
    const posterFallback = document.createElement("span");
    posterFallback.className = "real-movie-poster-fallback";
    posterFallback.textContent = movie.title;
    poster.addEventListener("error", () => {
        poster.hidden = true;
        posterFallback.hidden = false;
    }, { once: true });
    posterFallback.hidden = true;
    getMovieImage(movie).then((src) => {
        if (src) poster.src = src;
        else posterFallback.hidden = false;
    });
    artworkLink.append(poster, posterFallback);

    const info = document.createElement("div");
    info.className = "real-movie-info";
    const heading = document.createElement("a");
    heading.className = "real-movie-info-title";
    heading.href = detailUrl;
    heading.textContent = movie.title;
    const facts = document.createElement("span");
    facts.className = "real-movie-facts";
    facts.textContent = `${movie.year} · ${movie.runtime}`;
    const rating = document.createElement("span");
    rating.className = "real-movie-rating";
    rating.textContent = `★ ${movie.imdbRating.toFixed(1)} IMDb`;
    const genres = document.createElement("span");
    genres.className = "real-movie-genres";
    genres.textContent = movie.genres.join(" · ");

    const bookmark = document.createElement("button");
    bookmark.className = "real-movie-watchlist";
    bookmark.type = "button";
    const updateBookmark = () => {
        const saved = watchlist.includes(movie.id);
        bookmark.textContent = saved ? "✓ In Watchlist" : "+ Watchlist";
        bookmark.setAttribute("aria-pressed", String(saved));
        bookmark.setAttribute("aria-label", `${saved ? "Remove" : "Add"} ${movie.title} ${saved ? "from" : "to"} watchlist`);
    };
    bookmark.addEventListener("click", () => {
        const previous = [...watchlist];
        const position = watchlist.indexOf(movie.id);
        if (position === -1) watchlist.push(movie.id);
        else watchlist.splice(position, 1);
        if (!writeMovieList(watchlistStorageKey, watchlist, status)) {
            watchlist.splice(0, watchlist.length, ...previous);
            return;
        }
        updateBookmark();
        if (onWatchlistChange) onWatchlistChange(watchlist);
    });
    updateBookmark();

    info.append(heading, facts, rating, genres, bookmark);
    card.append(artworkLink, info);
    return card;
}

function renderMovieCatalog(container) {
    const section = container.closest(".real-catalog-section");
    const filters = section.querySelector("[data-catalog-filters]");
    const emptyMessage = section.querySelector(".real-catalog-empty");
    const requestedGenre = new URLSearchParams(window.location.search).get("genre");
    let activeGenre = catalogGenres.includes(requestedGenre) ? requestedGenre : "All";
    const watchlist = readMovieList(watchlistStorageKey);

    for (const genre of ["All", ...catalogGenres]) {
        const button = document.createElement("button");
        button.className = "real-catalog-filter";
        button.type = "button";
        button.textContent = genre;
        button.setAttribute("aria-pressed", String(genre === activeGenre));
        button.addEventListener("click", () => {
            activeGenre = genre;
            for (const filter of filters.querySelectorAll("button")) {
                filter.setAttribute("aria-pressed", String(filter.textContent === activeGenre));
            }
            showMovies();
        });
        filters.append(button);
    }

    function showMovies() {
        const movies = activeGenre === "All" ? realMovies : realMovies.filter((movie) => movie.genres.includes(activeGenre));
        container.replaceChildren(...movies.map((movie) => createMovieCard(movie, watchlist)));
        emptyMessage.hidden = movies.length > 0;
    }
    showMovies();
}

function renderDiscover(container) {
    const section = container.closest(".real-catalog-section");
    const page = section.closest(".discover-page");
    const status = section.querySelector("[data-catalog-status]");
    const watchlist = readMovieList(watchlistStorageKey);
    const search = section.querySelector("[data-search-movies]");
    const filters = Object.fromEntries([...section.querySelectorAll("[data-filter]")].map((control) => [control.dataset.filter, control]));
    const sort = section.querySelector("[data-sort-movies]");
    const results = section.querySelector("[data-browse-results]");
    const empty = section.querySelector("[data-browse-empty]");

    const fillSelect = (select, values, firstLabel) => {
        select.replaceChildren(new Option(firstLabel, "All"), ...values.map((value) => new Option(value, value)));
    };
    fillSelect(filters.genre, catalogGenres, "All genres");
    fillSelect(filters.language, [...new Set(realMovies.flatMap((movie) => movie.language.split(", ")))].sort(), "All languages");
    fillSelect(filters.year, [...new Set(realMovies.map((movie) => movie.year))].sort((a, b) => Number(b) - Number(a)), "All years");

    const renderCards = (target, movies) => {
        target.replaceChildren(...movies.map((movie) => createMovieCard(movie, watchlist, status, refreshWatchlist)));
    };
    const refreshWatchlist = () => {
        updateShelf("watchlist", realMovies.filter((movie) => watchlist.includes(movie.id)));
        updateShelf("recommendations", getRecommendations());
        updateBrowse();
    };
    const updateShelf = (name, movies) => {
        const shelf = section.querySelector(`[data-shelf="${name}"]`);
        if (!shelf) return;
        renderCards(shelf, movies);
        const emptyMessage = section.querySelector(`[data-shelf-empty="${name}"]`);
        if (emptyMessage) emptyMessage.hidden = movies.length > 0;
    };
    const getRecommendations = () => {
        const history = readMovieList(historyStorageKey)
            .map((id) => realMovies.find((movie) => movie.id === id))
            .filter(Boolean);
        if (!history.length) return [];
        const viewedIds = new Set(history.map((movie) => movie.id));
        return realMovies.filter((movie) => !viewedIds.has(movie.id))
            .map((movie) => ({
                movie,
                relevance: history.reduce((score, viewedMovie) =>
                    score + movie.genres.filter((genre) => viewedMovie.genres.includes(genre)).length, 0)
            }))
            .filter((item) => item.relevance > 0)
            .sort((a, b) => b.relevance - a.relevance || b.movie.imdbRating - a.movie.imdbRating)
            .slice(0, 6)
            .map((item) => item.movie);
    };
    const updateBrowse = () => {
        const query = search.value.trim().toLocaleLowerCase();
        const genre = filters.genre.value;
        const language = filters.language.value;
        const year = filters.year.value;
        const minimumRating = Number(filters.rating.value) || 0;
        let movies = realMovies.filter((movie) => {
            const text = `${movie.title} ${movie.cast} ${movie.director} ${movie.genres.join(" ")}`.toLocaleLowerCase();
            return (!query || text.includes(query))
                && (genre === "All" || movie.genres.includes(genre))
                && (language === "All" || movie.language.split(", ").includes(language))
                && (year === "All" || movie.year === year)
                && movie.imdbRating >= minimumRating;
        });
        if (sort.value === "rating") movies.sort((a, b) => b.imdbRating - a.imdbRating);
        else if (sort.value === "release") movies.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        else movies.sort((a, b) => a.popularity - b.popularity);
        renderCards(results, movies);
        empty.hidden = movies.length > 0;
    };

    updateShelf("trending", [...realMovies].sort((a, b) => a.popularity - b.popularity).slice(0, 6));
    updateShelf("top-rated", [...realMovies].sort((a, b) => b.imdbRating - a.imdbRating).slice(0, 10));
    updateShelf("new-releases", [...realMovies].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)).slice(0, 6));
    updateShelf("watchlist", realMovies.filter((movie) => watchlist.includes(movie.id)));
    updateShelf("recommendations", getRecommendations());

    for (const mood of section.querySelectorAll("[data-mood]")) {
        const genres = mood.dataset.mood.split("|");
        renderCards(mood.querySelector("[data-mood-movies]"), realMovies.filter((movie) => movie.genres.some((genre) => genres.includes(genre))).slice(0, 4));
    }
    section.querySelectorAll("[data-genre-link]").forEach((button) => {
        button.addEventListener("click", () => {
            filters.genre.value = button.dataset.genreLink;
            updateBrowse();
            section.querySelector("#browse-all").scrollIntoView({ behavior: "smooth" });
        });
    });

    [search, ...Object.values(filters), sort].forEach((control) => {
        control.addEventListener(control === search ? "input" : "change", updateBrowse);
    });

    const history = readMovieList(historyStorageKey);
    const recommendationEmpty = section.querySelector('[data-shelf-empty="recommendations"]');
    if (!history.length) section.querySelector('[data-shelf-empty="recommendations"]').textContent = "Open a few movie details and we’ll suggest similar films based on your history.";
    else if (!getRecommendations().length) recommendationEmpty.textContent = "No similar titles found yet. Explore the catalog to build your recommendations.";

    const heroMovies = [...realMovies].sort((a, b) => a.popularity - b.popularity).slice(0, 4);
    const heroImage = page.querySelector("[data-hero-image]");
    const heroTitle = page.querySelector("[data-hero-title]");
    const heroYear = page.querySelector("[data-hero-year]");
    const heroRating = page.querySelector("[data-hero-rating]");
    const heroLink = page.querySelector("[data-hero-link]");
    let heroIndex = 0;
    const showHero = (index) => {
        heroIndex = (index + heroMovies.length) % heroMovies.length;
        const movie = heroMovies[heroIndex];
        heroTitle.textContent = movie.title;
        heroYear.textContent = `${movie.year} · ${movie.runtime}`;
        heroRating.textContent = `★ ${movie.imdbRating.toFixed(1)} IMDb`;
        heroLink.href = `movie-details.html?movie=${encodeURIComponent(movie.id)}`;
        heroImage.alt = `${movie.title} featured artwork`;
        heroImage.src = "";
        getMovieImage(movie).then((src) => {
            if (src) heroImage.src = src;
            else heroImage.hidden = true;
        });
        heroImage.hidden = false;
        page.querySelectorAll("[data-hero-dot]").forEach((dot, dotIndex) => dot.setAttribute("aria-pressed", String(dotIndex === heroIndex)));
    };
    page.querySelector("[data-hero-previous]").addEventListener("click", () => showHero(heroIndex - 1));
    page.querySelector("[data-hero-next]").addEventListener("click", () => showHero(heroIndex + 1));
    page.querySelectorAll("[data-hero-dot]").forEach((dot, index) => dot.addEventListener("click", () => showHero(index)));
    showHero(0);

    updateBrowse();
}

function renderMovieDetail(container) {
    const requestedId = new URLSearchParams(window.location.search).get("movie");
    const movie = realMovies.find((item) => item.id === requestedId);

    if (!movie) {
        const message = document.createElement("p");
        message.className = "movie-detail-not-found";
        message.textContent = "Movie details could not be found. Please choose a movie from Discover.";
        container.replaceChildren(message);
        return;
    }

    document.title = `${movie.title} (${movie.year}) | Cinephile`;
    container.className = "";

    const createElement = (tagName, className, text) => {
        const element = document.createElement(tagName);
        if (className) element.className = className;
        if (text) element.textContent = text;
        return element;
    };

    const hero = createElement("section", "detail-hero");
    const backdrop = createElement("img", "detail-backdrop");
    backdrop.alt = "";
    getMovieImage(movie).then((src) => {
        if (src) backdrop.src = src;
        else backdrop.hidden = true;
    });
    backdrop.addEventListener("error", () => {
        backdrop.hidden = true;
    }, { once: true });

    const gradient = createElement("div", "detail-gradient");
    const heroContent = createElement("div", "detail-hero-content detail-hero-content--catalog");
    const posterFrame = createElement("div", "hero-poster");
    const poster = createElement("img");
    poster.alt = `${movie.title} (${movie.year}) poster`;
    poster.loading = "eager";
    poster.decoding = "async";
    getMovieImage(movie).then((src) => {
        if (src) poster.src = src;
        else poster.hidden = true;
    });
    poster.addEventListener("error", () => {
        poster.hidden = true;
    }, { once: true });
    posterFrame.append(poster);

    const information = createElement("div", "hero-information");
    const heading = createElement("h1", "", movie.title);
    heading.append(createElement("span", "", ` (${movie.year})`));

    const meta = createElement("div", "hero-meta");
    meta.append(
        createElement("span", "rating-box", "Movie"),
        createElement("span", "", "•"),
        createElement("span", "", movie.releaseDate),
        createElement("span", "", "•"),
        createElement("span", "", movie.runtime)
    );

    const actions = createElement("div", "hero-actions");
    const score = createElement("div", "score");
    score.append(
        createElement("strong", "", `★ ${movie.imdbRating.toFixed(1)}`),
        createElement("span", "", "IMDb user rating")
    );
    actions.append(score);

    const tagline = createElement("p", "tagline", movie.tagline);
    const facts = createElement("div", "movie-facts-row");
    for (const [label, value] of [
        ["Directed By", movie.director],
        ["Country", movie.country],
        ["Language", movie.language],
        ["Release Date", movie.releaseDate]
    ]) {
        const fact = createElement("div", "movie-fact");
        fact.append(
            createElement("span", "fact-label", label),
            createElement("strong", "fact-value", value)
        );
        facts.append(fact);
    }

    information.append(heading, meta, actions, tagline, facts);
    heroContent.append(posterFrame, information);
    hero.append(backdrop, gradient, heroContent);

    const main = createElement("main", "page-content");
    const overview = createElement("section", "overview");
    const overviewHeading = createElement("h2", "", "Overview");
    const overviewText = createElement("p", "", movie.synopsis);
    const moreInfo = createElement("a", "", "More info");
    moreInfo.href = movie.wikipedia;
    moreInfo.target = "_blank";
    moreInfo.rel = "noopener noreferrer";
    overviewText.append(" ", moreInfo);
    overview.append(overviewHeading, overviewText);
    const genres = createElement("div", "genres");
    movie.genres.forEach((genre) => genres.append(createElement("span", "", genre)));
    overview.append(genres);

    const separator = () => createElement("div", "separator");
    const castSection = createElement("section", "people-section");
    castSection.append(createElement("h2", "", "Cast"));
    const createPersonCard = (name, role) => {
        const person = createElement("article", "person");
        const portrait = personPortraits[name];
        const initials = name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2);
        const photo = createElement(portrait ? "a" : "div", `person-photo${portrait ? " person-photo-link" : " person-photo-initials"}`);
        if (portrait) {
            photo.href = portrait[1];
            photo.target = "_blank";
            photo.rel = "noopener noreferrer";
            photo.setAttribute("aria-label", `View ${name}'s Wikipedia page`);
            const image = createElement("img");
            image.src = portrait[0];
            image.alt = name;
            image.loading = "lazy";
            image.decoding = "async";
            image.addEventListener("error", () => {
                photo.classList.add("person-photo-initials");
                photo.replaceChildren(createElement("span", "", initials));
                photo.removeAttribute("href");
                photo.removeAttribute("target");
                photo.removeAttribute("aria-label");
            }, { once: true });
            photo.append(image);
        } else {
            photo.append(createElement("span", "", initials));
        }
        person.append(photo, createElement("h3", "", name), createElement("p", "", role));
        return person;
    };

    const castGrid = createElement("div", "cast-grid");
    const characters = characterNames[movie.id] || [];
    movie.cast.split(", ").forEach((name, index) => {
        castGrid.append(createPersonCard(name, characters[index] || "Cast"));
    });
    const castCredit = createElement("p", "people-attribution", "Cast portraits link only to their Wikipedia biographies.");
    castSection.append(castGrid, castCredit);

    const crewSection = createElement("section", "people-section");
    crewSection.append(createElement("h2", "", "Crew"));
    const crewGrid = createElement("div", "crew-grid");
    movie.director.split(", ").forEach((name, index) => {
        crewGrid.append(createPersonCard(name, index === 0 ? "Director" : "Co-director"));
    });
    crewSection.append(crewGrid);

    const productionSection = createElement("section", "production");
    productionSection.append(createElement("h2", "", "Production House"));
    const productionList = createElement("div", "production-list");
    movie.production.forEach((company) => productionList.append(createElement("span", "", company)));
    productionSection.append(productionList);

    const attribution = createElement("aside", "movie-image-attribution");
    attribution.append(createElement("p", "", "Movie artwork is provided through Wikipedia article images. Cast portraits link only to their Wikipedia biographies. IMDb ratings may change over time."));

    main.append(overview, separator(), castSection, separator(), crewSection, separator(), productionSection, attribution);
    container.replaceChildren(hero, main);
    addToMovieHistory(movie.id);
}

document.querySelectorAll("[data-movie-catalog]").forEach((container) => {
    if (container.closest(".discover-page")) renderDiscover(container);
    else renderMovieCatalog(container);
});
document.querySelectorAll("[data-movie-detail]").forEach(renderMovieDetail);
