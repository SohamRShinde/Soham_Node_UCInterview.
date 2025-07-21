let episodes = [
{name: "The One with Ross's Tan", season: 10, ep_no: 3, avg_rating: 8.5},
{name: "The One with the Prom Video", season: 2, ep_no: 14, avg_rating: 9.6},
{name: "The Last One, Part 2", season: 10, ep_no: 18, avg_rating: 9.6},
{ name: "The One Where Everybody Finds Out", season: 5, ep_no: 14, avg_rating: 9.5 }
];
function sortEpisodes(episodes) {
    let sortedEpisodes = episodes.sort(function(a,b) {
        if(a.avg_rating != b.avg_rating) {
            return b.avg_rating - a.avg_rating;
        }
        else if(a.season != b.season) {
            return a.season - b.season;
        }
        else return a.ep_no - b.ep_no;
    });
    return sortedEpisodes
}

console.log(sortEpisodes(episodes));