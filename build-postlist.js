const fs = require('fs'), fm = require('front-matter');
const colors = require('colors');

const sources = [
  {
    path: './src/posts/',
    destFile: "postList.json"
  },
  {
    path: './src/notes/',
    destFile: "notesList.json"
  }
]

function dateSort(a , b) {
  if ( a.date < b.date ){
    return 1;
  }
  if ( a.date > b.date ){
    return -1;
  }
  return 0;  
}


function generateListJson(postsPath, outPutfile) {
  fs.readdir(postsPath, { withFileTypes: true }, (error, files) => {
    if (error) throw error;
    const filesInDIrectory = files
        .filter((item) => item.isFile())
        .map((item) => item.name);

        let postListJson = {
            updated: "",
            count: 0,
            posts: []
        };

    filesInDIrectory.forEach(fileName => {  
        if(fileName !== outPutfile){            
            console.log(`Processing: ${fileName}`.green);

            let info = fileName.split('.');           

            let postInfo = {
              fileName: fileName,
              slug: info[0],
              date: "",
              title: "",
              abstract: ""
            }

            try {
                const data = fs.readFileSync(postsPath+fileName, 'utf8')
                var content = fm(data) ;
                postInfo.date = content.attributes.date;
                postInfo.title = content.attributes.title;
                postInfo.abstract = content.attributes.abstract;
                //console.log(content)
              } catch (err) {
                console.error(err)
              }     
            
            postListJson.count ++;
            postListJson.posts.push(postInfo);          
        }            
    });

    postListJson.posts.sort(dateSort);
    postListJson.updated = Date.now();
    
    let outData = JSON.stringify(postListJson);
    fs.writeFileSync(postsPath+outPutfile, outData);
    console.log(`Data saved to: ${postsPath+outPutfile}`.yellow);
    console.log("\n");
    
  });
}

sources.forEach(source => {
  generateListJson(source.path, source.destFile);
})

