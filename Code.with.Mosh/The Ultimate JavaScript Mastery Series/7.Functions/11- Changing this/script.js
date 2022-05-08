
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // const self = this;
        this.tags.forEach(tag =>  {
            console.log(this.title, tag);
        })//.bind(this );
    }
};

video.showTags();

/*
function playVideo() {
    console.log(this);
}

playVideo.call({ name: 'John'}, 1, 2);
playVideo.apply({ name: 'John'}, [1, 2]);
const fn = playVideo.bind( {name: 'John'})();
// playVideo();
*/