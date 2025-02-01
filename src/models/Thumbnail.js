export default class Thumbnail {
    constructor(file) {
        this.name = file.name;
        this.size = file.size;
        this.type = file.type;
        this.url = URL.createObjectURL(file);
    }
}