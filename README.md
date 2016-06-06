# Angular World Region Selector

This module is a clickable region selector that was created for a client project.

It consists of the following:

- A sprite image
- Some CSS
- An Angular service
- An Angular directive

And has the following dependencies:

- jQuery (latest 1.x or 2.1.x)
- Angular (1.3.x or 1.4.x)

> May work with other versions as well, but this hasn't been thoroughly tested.


## Image Map

This module uses image map coordinates to define the clickable areas. Starting coordinates are hard-coded in the Angular directive, and re-calculated on page resize.

The starting coordinates were generated using:

[Summer Image Mapper - Mozilla Developers Network](https://developer.cdn.mozilla.net/media/uploads/demos/s/u/summerstyle/365ccfd644f2b008c33f0046d2ba1a8f/summer-html-image-ma_1355318513_demo_package/index.html)

There are numerous other image mapping tools out there, so if you're not happy with this one, you can search for another. Try Googling __image map generator__. Dreamweaver also apparently has an image mapping tool.
