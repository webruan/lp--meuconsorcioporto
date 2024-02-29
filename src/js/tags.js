function loadTags() { 
  // Start - Tag Manager -> Owner 
  (function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
      'gtm.start':
        new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-KSPK5FS7');

  const tagManagerIframe = document.createElement('iframe');
  const tagManagerNoscript = document.createElement('noscript');

  tagManagerIframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-KSPK5FS7';
  tagManagerIframe.width = '0';
  tagManagerIframe.height = '0';
  tagManagerIframe.style = 'display:none;visibility:hidden';
  
  document.body.appendChild(tagManagerNoscript).appendChild(tagManagerIframe);
  // End - Tag Manager -> Owner

  // Start - Tag Manager -> @webruan
  (function (w, d, s, l, i) {
  w[l] = w[l] || []; w[l].push({
    'gtm.start':
      new Date().getTime(), event: 'gtm.js'
  }); var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
      'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-TFRS3G9D');

  const GTMIframeRuan = document.createElement('iframe');

  GTMIframeRuan.src = 'https://www.googletagmanager.com/ns.html?id=GTM-TFRS3G9D';
  GTMIframeRuan.width = '0';
  GTMIframeRuan.height = '0';
  GTMIframeRuan.style = 'display:none;visibility:hidden';

  document.body.appendChild(tagManagerNoscript).appendChild(GTMIframeRuan);
  // End - Tag Manager -> @webruan
  
  // Start - Fontawesome Icons
  const iconElement = document.createElement('link');
  iconElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
  iconElement.rel = 'stylesheet';
  iconElement.integrity = 'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==';
  iconElement.crossOrigin = 'anonymous';
  iconElement.referrerPolicy = 'no-referrer';

  document.head.appendChild(iconElement);
  // End - Fontawesome Icons
  
  // Start - reCaptcha
  const recaptchaElement = document.createElement('script');
  recaptchaElement.src = 'https://www.google.com/recaptcha/api.js';

  document.body.appendChild(recaptchaElement);
  // End - reCaptcha

  // Start - Clarity -> @webruan
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "iuj2ty6kfe");
  // End - Clarity -> @webruan

  window.removeEventListener('scroll', loadTags);
}

window.addEventListener('scroll', loadTags);
