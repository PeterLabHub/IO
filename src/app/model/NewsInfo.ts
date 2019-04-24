
export class NewsInfoData {
  id: number;
  title: string;
  images: any;
}
export class NewsHotData {
  news_id: number;
  thumbnail: string;
  title: string;
  url: string;
}
export class NewsColumnData {
  id: number;
  name: string;
  thumbnail: string = 'assets/image/head_default.jpg';
  description: string;
  public set setThumbnail(v: string) {
    this.thumbnail = v;
  }
  public get getThumbnail(): string {
    return (this.thumbnail = ''
      ? 'assets/image/head_default.jpg'
      : this.thumbnail);
  }

  // getThumbnail(){
  //     return this.thumbnail=''?'assets/image/head_default.jpg':this.thumbnail;
  // }
}
export class NewestData{
    images:string[];
    id:number;
    title:string;
}
export class NominateData{
    bio:string;
    title:string;
    id:number;
    avatar:string;
    name:string;
}
