// The object that is executing the current function
// method -> obj
// function -> global (window,       global)
//                     in browsers,  in node Object [global]  

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    //play() {
    //    console.log(this);
    //}
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};
video.showTags();

// video.stop = function() {
//    console.log(this);
// }
//video.play();
//video.stop();

//function Video(title) {
//    this.title = title;
//    console.log(this);
//}
//const v = new Video('b'); // {}
