// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`12001200030303030303030303030303030303030303030202020202020202020202020202020203030201010101010101010101010101010203030201010101010101010101010101010203030201010101010101010101010101010203030201010101010101010101010101010203030201010101010101010101010101010203030201010101010101010101010101010203030201010101010101010101010101010203030201010101010101010101010101010203030201010101010101010101010101010203030201010101010101010101010101010203030201010101010101010101010101010203030201010101010101010101010101010203030201010101010101010101010101010203030201010101010101010101010101010203030202020202020202020202020202020203030303030303030303030303030303030303`, img`
222222222222222222
2................2
2................2
2................2
2................2
2................2
2................2
2................2
2................2
2................2
2................2
2................2
2................2
2................2
2................2
2................2
2................2
222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.builtin.forestTiles10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
