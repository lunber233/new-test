(function () {
    var opening = document.getElementById('site-opening');
    var enterBtn = document.getElementById('opening-vase');
    var rippleLayer = opening ? opening.querySelector('.opening-ripples') : null;
    var quoteLayer = document.getElementById('opening-kiln-quotes');
    var quoteTimer = null;
    var lastQuoteIndex = -1;
    var kilnQuotes = [
        '雨过天晴云破处，这般颜色做将来',
        '如冰似玉品官窑',
        '哥窑百圾破，铁足独称珍',
        '峡谷飞瀑兔丝缕，夕阳紫翠忽成岚',
        '定州花瓷瓯，颜色天下白'
    ];

    if (!opening || !enterBtn || !rippleLayer) {
        return;
    }

    function addRipple(clientX, clientY) {
        var rect = opening.getBoundingClientRect();
        var ripple = document.createElement('span');
        ripple.className = 'opening-ripple';
        ripple.style.left = (clientX - rect.left) + 'px';
        ripple.style.top = (clientY - rect.top) + 'px';
        rippleLayer.appendChild(ripple);

        window.setTimeout(function () {
            ripple.remove();
        }, 1200);
    }

    function getNextQuoteIndex() {
        if (kilnQuotes.length < 2) return 0;
        var index = Math.floor(Math.random() * kilnQuotes.length);
        while (index === lastQuoteIndex) {
            index = Math.floor(Math.random() * kilnQuotes.length);
        }
        lastQuoteIndex = index;
        return index;
    }

    function rectsOverlap(a, b) {
        return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
    }

    function getQuotePosition(quote) {
        var openingRect = opening.getBoundingClientRect();
        var plateRect = enterBtn.getBoundingClientRect();
        var quoteRect = quote.getBoundingClientRect();
        var quoteWidth = Math.max(quoteRect.width, 1);
        var quoteHeight = Math.max(quoteRect.height, 1);
        var padding = 28;
        var safePlate = {
            left: plateRect.left - openingRect.left - padding,
            right: plateRect.right - openingRect.left + padding,
            top: plateRect.top - openingRect.top - padding,
            bottom: plateRect.bottom - openingRect.top + padding
        };
        var maxX = openingRect.width - quoteWidth * 0.5 - padding;
        var minX = quoteWidth * 0.5 + padding;
        var maxY = openingRect.height - quoteHeight * 0.5 - padding;
        var minY = quoteHeight * 0.5 + padding;
        var zones = [
            {left: minX, right: maxX, top: minY, bottom: safePlate.top - quoteHeight * 0.5},
            {left: minX, right: maxX, top: safePlate.bottom + quoteHeight * 0.5, bottom: maxY},
            {left: minX, right: safePlate.left - quoteWidth * 0.5, top: minY, bottom: maxY},
            {left: safePlate.right + quoteWidth * 0.5, right: maxX, top: minY, bottom: maxY}
        ].filter(function(zone) {
            return zone.right > zone.left && zone.bottom > zone.top;
        });
        for (var i = 0; i < 28; i++) {
            var zone = zones.length ? zones[Math.floor(Math.random() * zones.length)] : null;
            var x = zone ? zone.left + Math.random() * (zone.right - zone.left) : minX + Math.random() * Math.max(1, maxX - minX);
            var y = zone ? zone.top + Math.random() * (zone.bottom - zone.top) : minY + Math.random() * Math.max(1, maxY - minY);
            var candidate = {
                left: x - quoteWidth * 0.5,
                right: x + quoteWidth * 0.5,
                top: y - quoteHeight * 0.5,
                bottom: y + quoteHeight * 0.5
            };
            if (!rectsOverlap(candidate, safePlate)) {
                return {x: x, y: y};
            }
        }
        return {
            x: openingRect.width * 0.5,
            y: safePlate.top > openingRect.height - safePlate.bottom ? minY : maxY
        };
    }

    function showRandomKilnQuote() {
        if (!quoteLayer || !kilnQuotes.length || opening.classList.contains('is-leaving')) return;
        var quote = document.createElement('span');
        quote.className = 'opening-kiln-quote';
        quote.textContent = kilnQuotes[getNextQuoteIndex()];
        quote.style.setProperty('--quote-scale', (1 + Math.random() * 0.58).toFixed(2));
        if (Math.random() > 0.68) {
            quote.style.setProperty('--quote-writing-mode', 'vertical-rl');
        }
        quote.style.visibility = 'hidden';
        quoteLayer.appendChild(quote);
        var position = getQuotePosition(quote);
        quote.style.setProperty('--quote-x', position.x.toFixed(0) + 'px');
        quote.style.setProperty('--quote-y', position.y.toFixed(0) + 'px');
        quote.style.visibility = '';

        window.setTimeout(function () {
            quote.remove();
        }, 3100);
    }

    function startKilnQuoteLoop() {
        window.setTimeout(showRandomKilnQuote, 300);
        quoteTimer = window.setInterval(showRandomKilnQuote, 3000);
    }

    function stopKilnQuoteLoop() {
        if (quoteTimer) {
            window.clearInterval(quoteTimer);
            quoteTimer = null;
        }
        if (quoteLayer) {
            quoteLayer.textContent = '';
        }
    }

    function enterSite(event) {
        if (event) {
            addRipple(event.clientX || window.innerWidth / 2, event.clientY || window.innerHeight / 2);
        }
        stopKilnQuoteLoop();
        var mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.classList.add('home-entered');
        }
        opening.classList.add('is-leaving');
        opening.setAttribute('aria-hidden', 'true');
        enterBtn.disabled = true;

        window.setTimeout(function () {
            opening.remove();
        }, 1150);
    }

    opening.addEventListener('pointermove', function (event) {
        opening.style.setProperty('--opening-x', event.clientX + 'px');
        opening.style.setProperty('--opening-y', event.clientY + 'px');
    });

    opening.addEventListener('pointerdown', function (event) {
        if (event.target === enterBtn || enterBtn.contains(event.target)) {
            return;
        }
        addRipple(event.clientX, event.clientY);
    });

    enterBtn.addEventListener('click', enterSite);
    startKilnQuoteLoop();
})();
