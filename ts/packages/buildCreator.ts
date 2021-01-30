import replaceColor from 'replace-color';
import mongodb from './mongodb';

function replaceRegionColor(color: string, id: string) : void {
  // eslint-disable-next-line
  mongodb(async(obj: any) => {
    const { db } = obj;
    const map = await db.collection('map').find({}).toArray();
    for (const { img } of map) {
      const JimpObject = await replaceColor({
        image: `./assets/${img}.png`,
        colors: {
          type: 'hex',
          targetColor: '#000000',
          replaceColor: color
        }
      });
      await JimpObject.write(`./build_assets/${id}_${img}.png`);
    }
  });
}

export default replaceRegionColor;