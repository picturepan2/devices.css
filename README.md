# Devices.css

Devices.css - Modern devices crafted in pure CSS

All devices are elegantly developed in pure CSS. The first are newly announced iPhone X and iPhone 8. More devices are coming. You can use these minimal devices in landing and screenshot showcase pages.

## Devices

### Phones
- [iPhone 14 Pro](https://devicescss.xyz/phones.html#iphone-14-pro)
- [iPhone 14](https://devicescss.xyz/phones.html#iphone-14)
- [iPhone X](https://devicescss.xyz/phones.html#iphone-x)
- [iPhone 8](https://devicescss.xyz/phones.html#iphone-8)
- [Google Pixel 2 XL](https://devicescss.xyz/phones.html#google-pixel-2-xl)
- [Google Pixel](https://devicescss.xyz/phones.html#google-pixel)
- [Samsung Galaxy S8](https://devicescss.xyz/phones.html#galaxy-s8)
### Computers
- [MacBook Pro](https://devicescss.xyz/computers.html#macbook-pro)
- [MacBook Pro (2018)](https://devicescss.xyz/computers.html#macbook-pro-2018)
- [MacBook](https://devicescss.xyz/computers.html#macbook)
- [iMac](https://devicescss.xyz/computers.html#imac)
- [Surface Book](https://devicescss.xyz/computers.html#surface-book)
- [Surface Studio](https://devicescss.xyz/computers.html#surface-studio)
### Tablets
- [iPad Pro](https://devicescss.xyz/tablets.html#ipad-pro)
- [iPad Pro (2017)](https://devicescss.xyz/tablets.html#ipad-pro-2017)
- [Surface Pro (2017)](https://devicescss.xyz/tablets.html#surface-pro-2017)
### Watches
- [Apple Watch Ultra](https://devicescss.xyz/watches.html#apple-watch-ultra)
- [Apple Watch Series 8](https://devicescss.xyz/watches.html#apple-watch-series-8)
### Accessories
- [Apple HomePod](https://devicescss.xyz/accessories.html#homepod)
- [Pro Display XDR](https://devicescss.xyz/accessories.html#pro-display-xdr)

## What's next

- Add more devices and form factors
- Add landscape support
- Add responsive support

## Getting started

Download the compiled and minified [Devices.css files](https://github.com/picturepan2/devices.css). Include `devices.css` located in `/dist` in your website or Web app &lt;head&gt; part.

`<link rel="stylesheet" href="dist/devices.css">`

Go to [Demo page](https://devicescss.xyz/) to copy the device HTML source code and paste it to anywhere you want. All devices use the same HTML structure with different `device-[device-name]` classes.

```
<div class="device device-iphone-x">
  <div class="device-frame">
    <img class="device-screen" src="...">
  </div>
  <div class="device-stripe"></div>
  <div class="device-header"></div>
  <div class="device-sensors"></div>
  <div class="device-btns"></div>
  <div class="device-power"></div>
</div>
```
Also, there are optional `device-[device-color]` classes for different color variants.

You can add any screenshot or video with the `device-screen` class. The resolution aspect ratios are based on real ones.

## Custom

You can custom Devices.css by modifing SASS `.scss` files located in `src` folder.

## Browser support
Devices.css uses [Autoprefixer](https://github.com/postcss/autoprefixer) to make most styles compatible with earlier browsers. For best compatibility, these browsers are recommended:

- Chrome (LAST 4)
- Microsoft Edge (LAST 4)
- Firefox (EXTENDED SUPPORT RELEASE)
- Safari (LAST 4)
- Opera (LAST 4)

Built with ♥ by [Yan Zhu](https://twitter.com/picturepan2). Feel free to submit a pull request. Help is always appreciated.

Devices.css is completely free to use. If you enjoy it, please consider [donating via Paypal](https://www.paypal.me/picturepan2) for the further development. ♥ 
