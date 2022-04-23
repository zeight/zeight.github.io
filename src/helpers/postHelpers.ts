class PostHelper {

    getPostList() {
        return fetch('./postList.json')
        .then(response => response.json())
        .then(data => data as PostsList);              
    }

    getPostSlug(filename:string){
        let info = filename.split('.');
        let slug = info[0];        

        return slug;
    }

    convertDateToLocale(dateString:string) {
        const date = new Date(Date.parse(dateString));
        return date.toLocaleDateString('it-IT', {timeZone: 'Europe/Rome', weekday: 'long',  year: 'numeric', month: 'long', day: 'numeric'}, );
    }
}

export default new PostHelper();