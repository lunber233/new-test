/**
 * 瓷器网站 - 五边形窑口导航布局
 * 点击窑口图片展示诗句与介绍
 */

(function () {
    'use strict';

    // ===== 窑口数据 =====
    var KILN_DATA = [
        {
            name: '汝窑',
            subtitle: '雨过天青',
            poem: '雨过天晴云破处，这般颜色做将来',
            sections: [
                { title: '一、历史地位', items: [
                    '时间：北宋晚期（约11世纪末–12世纪初），专为宫廷烧造，存世仅约20年。',
                    '地点：河南宝丰清凉寺（古汝州境内）。',
                    '地位：宋代"五大名窑"之首，被誉为"青瓷之冠"。'
                ]},
                { title: '二、核心特征', items: [
                    '釉色：天青为最，兼有粉青、月白。釉面失透，温润如玉。',
                    '胎质：胎土含铁，呈"香灰色"（灰中带褐），俗称"香灰胎"。',
                    '支烧：器底有细小芝麻钉痕（多为3或5枚），露胎处呈铁褐色。',
                    '开片：釉面有细碎冰裂纹，又称"蟹爪纹"。'
                ]},
                { title: '三、造型与工艺', items: [
                    '器型：仿青铜礼器（如尊、瓶、洗、炉、碗、盘），多素面，极少装饰。',
                    '工艺：满釉裹足支烧，底部无釉处涂抹铁质护胎浆。'
                ]},
                { title: '四、存世与收藏', items: [
                    '数量：全球公认传世品不足100件。',
                    '主要藏地：北京故宫、台北故宫、大英博物馆、上海博物馆等。'
                ]},
                { title: '五、一句话点睛', highlight: '"纵有家财万贯，不如汝窑一片。"' }
            ]
        },
        {
            name: '官窑',
            subtitle: '紫口铁足',
            poem: '如冰似玉品官窑',
            sections: [
                { title: '一、历史地位', items: [
                    '时间：北宋末至南宋（12世纪），分北宋官窑（汴京）与南宋官窑（杭州修内司、郊坛下）。',
                    '地点：北宋窑址未明；南宋窑址在杭州乌龟山、老虎洞。',
                    '地位：宋代五大名窑之一，宫廷直接控制，为礼器与陈设瓷烧造。'
                ]},
                { title: '二、核心特征', items: [
                    '釉色：粉青、月白、灰青为主，釉质肥厚，有玉质感。',
                    '胎质：胎土含铁量高，呈黑灰或深灰色。',
                    '紫口铁足：口沿釉薄处露紫褐色胎，足部无釉处呈铁黑色。',
                    '开片：釉面有大片冰裂纹或鳝血纹，纹路错落。'
                ]},
                { title: '三、造型与工艺', items: [
                    '器型：仿青铜器（如鼎、觚、贯耳瓶、弦纹瓶），多素面，庄重典雅。',
                    '工艺：采用垫烧或支烧，部分器物有支钉痕，多为大支钉。'
                ]},
                { title: '四、存世与收藏', items: [
                    '数量：南宋官窑传世较北宋为多，总数约数百件。',
                    '主要藏地：北京故宫、台北故宫、杭州南宋官窑博物馆、大英博物馆。'
                ]},
                { title: '五、一句话点睛', highlight: '"官窑器如玉，紫口铁足开片古。"' }
            ]
        },
        {
            name: '哥窑',
            subtitle: '金丝铁线',
            poem: '哥窑百圾破，铁足独称珍',
            sections: [
                { title: '一、历史地位', items: [
                    '时间：南宋（12–13世纪），窑址仍有争议（浙江龙泉或杭州）。',
                    '地位：宋代五大名窑之一，以独特开片纹著称，后世仿烧极多。'
                ]},
                { title: '二、核心特征', items: [
                    '釉色：灰青、米黄、粉青，釉面呈"酥油光"。',
                    '金丝铁线：黑色大开片（铁线）与黄色小开片（金丝）交织，形成网络状纹饰。',
                    '胎质：胎色深灰或黑灰，俗称"铁骨"。',
                    '紫口铁足：部分器物口沿紫褐，足部铁黑。'
                ]},
                { title: '三、造型与工艺', items: [
                    '器型：常见双耳炉、贯耳瓶、葵口盘、洗、碗等。',
                    '工艺：裹足支烧或垫烧，底足多施釉，支钉痕细碎。'
                ]},
                { title: '四、存世与收藏', items: [
                    '数量：传世较多，但真品稀见于民间，博物馆收藏为主体。',
                    '主要藏地：北京故宫、台北故宫、上海博物馆、大英博物馆。'
                ]},
                { title: '五、一句话点睛', highlight: '"金丝铁线碎纹开，哥窑片片皆文章。"' }
            ]
        },
        {
            name: '钧窑',
            subtitle: '窑变万彩',
            poem: '峡谷飞瀑兔丝缕，夕阳紫翠忽成岚',
            sections: [
                { title: '一、历史地位', items: [
                    '时间：北宋至元（11–14世纪），以河南禹县（古钧州）为中心。',
                    '地位：宋代五大名窑之一，首次系统烧造窑变铜红釉，开后世彩釉瓷先河。'
                ]},
                { title: '二、核心特征', items: [
                    '釉色：天蓝、月白为主，局部出现海棠红、玫瑰紫、茄皮紫等窑变色斑。',
                    '蚯蚓走泥纹：釉面有曲折细线状流纹，为钧窑独特标记。',
                    '胎质：胎色灰褐，质地较粗。',
                    '乳光釉：釉层厚润，呈半失透状，有乳浊感。'
                ]},
                { title: '三、造型与工艺', items: [
                    '器型：花盆、盆托、出戟尊、鼓钉洗、炉、瓶等，多为陈设用器。',
                    '工艺：多采用垫烧，底足刷有褐色护胎浆，刻有数字（一至十，标示大小）。'
                ]},
                { title: '四、存世与收藏', items: [
                    '数量：宋代钧窑传世数量较多，属五大名窑中相对常见者。',
                    '主要藏地：北京故宫、台北故宫、河南省博物院、美国各大博物馆。'
                ]},
                { title: '五、一句话点睛', highlight: '"钧瓷无双，窑变天成。"' }
            ]
        },
        {
            name: '定窑',
            subtitle: '白瓷刻花',
            poem: '定州花瓷瓯，颜色天下白',
            sections: [
                { title: '一、历史地位', items: [
                    '时间：唐至元（7–14世纪），盛于北宋，窑址在河北曲阳（古定州）。',
                    '地位：宋代五大名窑之一，北方白瓷代表，首创覆烧工艺。'
                ]},
                { title: '二、核心特征', items: [
                    '釉色：白中泛黄（象牙白），釉薄光滑，泪痕状积釉常见。',
                    '装饰：以刻花、划花、印花为主，常见莲、菊、龙、凤纹。',
                    '芒口：覆烧导致口沿无釉，露出胎骨，后常镶金银铜扣。',
                    '胎质：胎色洁白坚致，烧结度高。'
                ]},
                { title: '三、造型与工艺', items: [
                    '器型：碗、盘、瓶、枕、孩儿枕等日用器为主，兼有玩具与宗教器。',
                    '工艺：首创覆烧法（碗盘倒扣烧），提高产量，但口沿露胎。'
                ]},
                { title: '四、存世与收藏', items: [
                    '数量：传世及出土数量庞大，是五大名窑中存量最多者。',
                    '主要藏地：北京故宫、台北故宫、河北省博物馆、大英博物馆。'
                ]},
                { title: '五、一句话点睛', highlight: '"定州花瓷瓯，颜色天下白。"' }
            ]
        }
    ];

    // ===== DOM 引用 =====
    var mainContent = document.getElementById('main-content');
    var poemOverlay = document.getElementById('poem-overlay');
    var poemText = document.getElementById('poem-text');
    var introPanel = document.getElementById('intro-panel');
    var introModel = document.getElementById('intro-model');
    var introTitle = document.getElementById('intro-title');
    var introContent = document.getElementById('intro-content');
    var introClose = document.getElementById('intro-close');

    var poemTimer = null;
    var isShowing = false;
    var currentIndex = -1;

    // Three.js 相关引用
    var modelRenderer = null;
    var modelAnimationId = null;
    var modelScene = null;

    /**
     * 渲染五个窑口标签围绕 "瓷" 字的布局
     */
    function renderPentagon() {
        var nodes = document.querySelectorAll('.kiln-node');
        if (nodes.length !== 5) return;

        var w = window.innerWidth;
        var h = window.innerHeight;
        var cx = w / 2;
        var cy = h / 2;

        var radius = Math.min(w, h) * 0.32;

        for (var i = 0; i < 5; i++) {
            var angle = (-90 + i * 72) * Math.PI / 180;
            var x = cx + radius * Math.cos(angle);
            var y = cy + radius * Math.sin(angle);
            nodes[i].style.left = x + 'px';
            nodes[i].style.top = y + 'px';
        }
    }

    /**
     * 触发窑口节点淡入动画
     */
    function showNodes() {
        var nodes = document.querySelectorAll('.kiln-node');
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].classList.add('loaded');
        }
    }

    /**
     * 显示诗句
     */
    function showPoem(index) {
        if (isShowing) return;
        isShowing = true;
        currentIndex = index;

        var data = KILN_DATA[index];
        if (!data) return;

        poemText.textContent = data.poem;

        poemOverlay.style.display = 'flex';
        void poemOverlay.offsetWidth;
        poemOverlay.classList.add('active');

        setTimeout(function () {
            poemText.classList.add('show');
        }, 100);

        poemTimer = setTimeout(function () {
            poemText.classList.remove('show');
            poemText.style.display = 'none';
            showIntro(data, index);
        }, 2500);
    }

    /**
     * 将窑口结构化数据渲染为分段 HTML
     */
    function renderIntroHTML(data) {
        var html = '<div class="intro-subtitle">' + data.name + ' · ' + data.subtitle + '</div>';
        for (var i = 0; i < data.sections.length; i++) {
            var sec = data.sections[i];
            html += '<div class="intro-section">';
            html += '<div class="intro-section-title">' + sec.title + '</div>';
            if (sec.highlight) {
                html += '<div class="intro-highlight">' + sec.highlight + '</div>';
            } else if (sec.items) {
                html += '<ul class="intro-items">';
                for (var j = 0; j < sec.items.length; j++) {
                    html += '<li>' + sec.items[j] + '</li>';
                }
                html += '</ul>';
            }
            html += '</div>';
        }
        return html;
    }

    /**
     * 显示介绍面板
     */
    function showIntro(data, index) {
        introTitle.textContent = data.name;
        introContent.innerHTML = renderIntroHTML(data);

        // 所有窑口统一使用左右分栏布局
        introPanel.classList.add('has-model');
        introPanel.style.display = 'flex';
        void introPanel.offsetWidth;
        introPanel.classList.add('show');

        // 延迟初始化左侧模型/占位区域
        setTimeout(function () {
            if (index === 0) {
                initRuYaoModel();
            } else {
                showKilnPlaceholder(index);
            }
        }, 300);
    }

    /**
     * 初始化汝窑 3D 模型
     */
    function initRuYaoModel() {
        if (!introModel || introModel.children.length > 0) return;

        var THREE = window.THREE;
        var GLTFLoader = THREE && THREE.GLTFLoader;

        console.log('[调试] typeof window.THREE:', typeof window.THREE);
        console.log('[调试] typeof THREE.Scene:', typeof (THREE && THREE.Scene));

        if (!THREE || typeof THREE.Scene !== 'function') {
            console.error('Three.js 未正确加载');
            showModelFallback();
            return;
        }

        try {
            var width = introModel.clientWidth || 480;
            var height = introModel.clientHeight || 480;

            modelScene = new THREE.Scene();
            modelScene.background = new THREE.Color(0xfafafa);

            var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
            camera.position.set(0, 1.5, 4);
            camera.lookAt(0, 0, 0);

            var renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.shadowMap.enabled = true;
            introModel.appendChild(renderer.domElement);
            modelRenderer = renderer;

            // 灯光
            var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            modelScene.add(ambientLight);

            var dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
            dirLight.position.set(5, 10, 7);
            dirLight.castShadow = true;
            modelScene.add(dirLight);

            var fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
            fillLight.position.set(-5, 0, -5);
            modelScene.add(fillLight);

            // 尝试加载 .glb 模型，失败时降级为程序化生成的瓷器
            if (GLTFLoader) {
                var loader = new GLTFLoader();
                loader.load(
                    '瓷器模型/汝窑.glb',
                    function (gltf) {
                        var model = gltf.scene;

                        var box = new THREE.Box3().setFromObject(model);
                        var center = box.getCenter(new THREE.Vector3());
                        var size = box.getSize(new THREE.Vector3());
                        var maxDim = Math.max(size.x, size.y, size.z);
                        var scale = 2.5 / maxDim;

                        model.position.sub(center);
                        model.scale.setScalar(scale);
                        model.position.y -= 0.6;

                        modelScene.add(model);

                        function animate() {
                            if (!introModel || !introModel.contains(renderer.domElement)) return;
                            modelAnimationId = requestAnimationFrame(animate);
                            model.rotation.y += 0.003;
                            renderer.render(modelScene, camera);
                        }
                        animate();
                    },
                    undefined,
                    function (error) {
                        console.warn('模型加载失败，使用程序化生成降级方案:', error);
                        createProceduralModel(THREE, modelScene, renderer, camera);
                    }
                );
            } else {
                // 无 GLTFLoader，直接用程序化生成
                createProceduralModel(THREE, modelScene, renderer, camera);
            }
        } catch (e) {
            console.error('3D模型初始化失败:', e);
            showModelFallback();
        }
    }

    /**
     * 程序化生成汝窑天青釉洗 3D 模型（降级方案）
     * 当 .glb 模型无法加载时（如 file:// 协议限制），用 LatheGeometry 生成瓷器形状
     */
    function createProceduralModel(THREE, scene, renderer, camera) {
        // 汝窑天青釉洗：浅腹、平底、敞口
        var points = [];
        // 底部中心
        points.push(new THREE.Vector2(0, 0));
        // 底部平面
        points.push(new THREE.Vector2(1.0, 0));
        // 底足过渡
        points.push(new THREE.Vector2(1.05, 0.05));
        // 器壁弧线
        points.push(new THREE.Vector2(1.1, 0.15));
        points.push(new THREE.Vector2(1.2, 0.4));
        points.push(new THREE.Vector2(1.3, 0.7));
        points.push(new THREE.Vector2(1.4, 1.0));
        points.push(new THREE.Vector2(1.45, 1.15));
        // 口沿外翻
        points.push(new THREE.Vector2(1.5, 1.25));
        points.push(new THREE.Vector2(1.48, 1.3));
        points.push(new THREE.Vector2(1.42, 1.32));

        var geometry = new THREE.LatheGeometry(points, 64);

        // 汝窑天青釉材质
        var material = new THREE.MeshPhysicalMaterial({
            color: 0x8ab4b8,
            metalness: 0.0,
            roughness: 0.25,
            clearcoat: 0.8,
            clearcoatRoughness: 0.15,
            reflectivity: 0.5,
            side: THREE.DoubleSide
        });

        var model = new THREE.Mesh(geometry, material);
        model.position.y = -1.3;
        scene.add(model);

        // 添加开片纹理效果
        var crackGeometry = new THREE.LatheGeometry(points.map(function(p) {
            return new THREE.Vector2(p.x + 0.005, p.y);
        }), 64);
        var crackMaterial = new THREE.MeshBasicMaterial({
            color: 0x9cc4c8,
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });
        var crackMesh = new THREE.Mesh(crackGeometry, crackMaterial);
        crackMesh.position.y = -1.3;
        scene.add(crackMesh);

        function animate() {
            if (!introModel || !introModel.contains(renderer.domElement)) return;
            modelAnimationId = requestAnimationFrame(animate);
            model.rotation.y += 0.005;
            crackMesh.rotation.y = model.rotation.y;
            renderer.render(scene, camera);
        }
        animate();
    }

    /**
     * 非汝窑窑口的左侧占位展示（为后续加入3D模型预留）
     */
    function showKilnPlaceholder(index) {
        if (!introModel) return;
        var kilns = [
            null, // 汝窑（index 0，不使用此方法）
            { name: '官', subtitle: '紫口铁足', color: '#a8c5b8', bg: '#f5f8f6' },
            { name: '哥', subtitle: '金丝铁线', color: '#8b7355', bg: '#f8f5f0' },
            { name: '钧', subtitle: '入窑一色出窑万彩', color: '#7b4f8a', bg: '#f6f2f8' },
            { name: '定', subtitle: '白瓷刻花', color: '#b8a88a', bg: '#f8f7f4' }
        ];
        var k = kilns[index];
        if (!k) return;
        introModel.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;background-color:' + k.bg + ';font-family:\'Noto Serif SC\',serif;">'
            + '<div style="font-size:72px;color:' + k.color + ';letter-spacing:8px;margin-bottom:16px;opacity:0.7;">' + k.name + '</div>'
            + '<div style="font-size:16px;letter-spacing:4px;color:#999;">' + k.subtitle + '</div>'
            + '</div>';
    }

    /**
     * Three.js 未加载时的纯文字降级方案
     */
    function showModelFallback() {
        if (!introModel) return;
        introModel.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#666;font-family:\'Noto Serif SC\',serif;">'
            + '<div style="font-size:64px;color:#8ab4b8;letter-spacing:8px;margin-bottom:16px;">汝</div>'
            + '<div style="font-size:16px;letter-spacing:3px;color:#999;">天青釉洗</div>'
            + '</div>';
    }

    /**
     * 关闭展示层
     */
    function closeOverlay() {
        clearTimeout(poemTimer);

        // 清理 Three.js
        if (modelAnimationId) {
            cancelAnimationFrame(modelAnimationId);
            modelAnimationId = null;
        }
        if (modelRenderer) {
            modelRenderer.dispose();
            modelRenderer = null;
        }
        if (introModel) {
            introModel.innerHTML = '';
        }
        modelScene = null;

        introPanel.classList.remove('has-model');

        poemOverlay.classList.remove('active');

        setTimeout(function () {
            poemOverlay.style.display = 'none';
            poemText.style.display = '';
            poemText.classList.remove('show');
            introPanel.classList.remove('show');
            introPanel.style.display = 'none';
            isShowing = false;
            currentIndex = -1;
        }, 500);
    }

    // ===== 事件绑定 =====

    var kilnImages = document.querySelectorAll('.kiln-img');
    for (var i = 0; i < kilnImages.length; i++) {
        (function (idx) {
            kilnImages[idx].addEventListener('click', function (e) {
                e.stopPropagation();
                showPoem(idx);
            });
        })(i);
    }

    if (introClose) {
        introClose.addEventListener('click', function (e) {
            e.stopPropagation();
            closeOverlay();
        });
    }

    // ===== 窗口大小变化时重新计算位置 =====
    var resizeTimer = null;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(renderPentagon, 150);
    });

    // 点击中央"瓷"字进入制瓷体验系统
    var centerChar = document.getElementById('center-char');
    if (centerChar) {
        centerChar.style.cursor = 'pointer';
        centerChar.addEventListener('click', function() {
            document.getElementById('main-content').style.display = 'none';
            document.getElementById('porcelain-maker').classList.add('active');
            if (window.initPorcelainMaker) {
                window.initPorcelainMaker();
            }
        });
    }

    // ===== 启动 =====
    renderPentagon();
    setTimeout(showNodes, 50);

})();
