Commands
===========

[blog post](http://blog.thematicmapping.org/2013/10/terrain-building-with-threejs-part-1.html)

## info [gdalinfo](http://www.gdal.org/gdalinfo.html)

```
gdalinfo -mm 5m-DEM-GTiff/0001-0001.tif 
```
* -mm signifies compute min/max

## greyscale image [gdal_translate](http://www.gdal.org/gdal_translate.html)

```
gdal_translate -scale 0 540 0 255 -outsize 256 256 -of PNG data/5m-DEM-GTiff/0001-0001.tif assets/wellington.png
```
* scale height 0 to 500 meters (gathered from gdalinfo) to 0 to 255 shades of grey.
* output 256 x 256 px image

## Create ENVI
```
gdal_translate -scale 0 540 0 65535 -ot UInt16 -outsize 200 200 -of ENVI data/5m-DEM-GTiff/0001-0001.tif assets/wellington.bin
```
* output a size of 200 x 200



* move JS to index.js and ES6ify it
* README
* 