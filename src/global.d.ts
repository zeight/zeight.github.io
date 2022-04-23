// globals.d.ts

interface PostsList{
    updated: string;
    count: number;
    posts: Post[];
}

interface Post{
 fileName: string;
 title: string;
 date: string;
 slug: string;
 abstract: string;
}