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
                { title: '五、工艺补充', items: [
                    '胎料：采用当地多种矿石粉碎、过滤，并以磁石去除铁质；胎土含铁量适中，烧后呈灰中带黄的“香灰胎”。',
                    '釉料：以玛瑙入釉，是汝窑区别于其他青瓷的重要特征，使釉面呈现温润光泽。',
                    '烧制：多采用二次烧成，素烧约800℃-900℃，釉烧约1200℃-1300℃，在还原气氛中烧成天青色。',
                    '上釉：属石灰碱釉，常用浸釉法并多次施釉，形成“满釉裹足”、薄而莹润、细碎开片的效果。'
                ]},
                { title: '六、一句话点睛', highlight: '"纵有家财万贯，不如汝窑一片。"' }
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
                { title: '五、工艺补充', items: [
                    '胎料：多用含铁量极高的紫金土，烧成后呈黑灰、深灰或紫黑色，是“紫口铁足”的基础。',
                    '釉料：以长石、石英、草木灰等调配，追求厚釉效果与温润玉质感。',
                    '烧制：普遍采用二次烧成，素烧约800℃-900℃；釉烧约1180℃-1250℃，温度控制强调厚釉熔融而不过度流淌。',
                    '上釉：石灰碱釉施得极厚，常厚于胎体，形成粉青、灰青、米黄等釉色及冰裂纹、鳝血纹等开片。'
                ]},
                { title: '六、一句话点睛', highlight: '"官窑器如玉，紫口铁足开片古。"' }
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
                { title: '五、工艺补充', items: [
                    '胎料：与官窑相近，多用含铁量高的深色胎土，胎色黑灰或深灰，也可见“紫口铁足”。',
                    '釉料：属青瓷釉系，成分与官窑相近；因窑址未定，具体配方仍有争议。',
                    '烧制：工艺与官窑相似，素烧约800℃-900℃，釉烧约1200℃-1250℃，利用胎釉膨胀系数差异形成自然开片。',
                    '上釉：乳浊釉润泽如酥油，俗称“酥油光”；大小深浅不同的开片形成“金丝铁线”。'
                ]},
                { title: '六、一句话点睛', highlight: '"金丝铁线碎纹开，哥窑片片皆文章。"' }
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
                { title: '五、工艺补充', items: [
                    '胎料：胎土颜色较深，呈灰褐色，质地较粗糙疏松。',
                    '釉料：含铜、铁、磷等多种元素，铜在还原气氛下可烧出海棠红、玫瑰紫等窑变色。',
                    '烧制：五大窑中烧成温度较高，釉烧约1250℃-1350℃；高温下铜元素发红紫，铁元素发青蓝。',
                    '上釉：典型乳浊厚釉，常用浸釉法一次或多次施釉；厚釉高温流动形成“蚯蚓走泥纹”。'
                ]},
                { title: '六、一句话点睛', highlight: '"钧瓷无双，窑变天成。"' }
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
                { title: '五、工艺补充', items: [
                    '胎料：使用当地优质高岭土，淘洗精细，烧成后胎质洁白、坚致细腻。',
                    '釉料：透明玻璃釉，区别于其他四窑的乳浊或失透釉；含铁量低，烧后呈象牙白。',
                    '烧制：首创覆烧工艺以提高产量，素烧后再釉烧，釉烧约1200℃-1280℃。',
                    '上釉：透明釉流动性强，常形成垂流“泪痕”；覆烧使口沿无法施釉，形成“芒口”，后常加金银铜扣。'
                ]},
                { title: '六、一句话点睛', highlight: '"定州花瓷瓯，颜色天下白。"' }
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
    var homeKilnIntro = document.getElementById('home-kiln-intro');
    var homeKilnIntroTitle = document.getElementById('home-kiln-intro-title');
    var homeKilnIntroBody = document.getElementById('home-kiln-intro-body');
    var homeKilnIntroIndex = null;
    var homeKilnIntroTimer = null;

    var poemTimer = null;
    var isShowing = false;
    var currentIndex = -1;

    // Three.js 相关引用
    var modelRenderer = null;
    var modelAnimationId = null;
    var modelScene = null;
    var modelCamera = null;
    var modelRaycaster = null;
    var modelPointer = null;
    var galleryModels = [];
    var selectedGalleryModel = null;
    var currentIntroData = null;
    var currentIntroIndex = -1;
    var artifactInfoTimer = null;
    var homeHoverRenderer = null;
    var homeHoverScene = null;
    var homeHoverCamera = null;
    var homeHoverModel = null;
    var homeHoverAnimationId = null;
    var homeHoverResizeHandler = null;
    var homeHoverLoadToken = 0;
    var homeHoverVideoPaths = {
        0: '动态背景/汝窑/可用.mp4',
        1: '动态背景/官窑/r8vpo789vlk.mp4',
        2: '动态背景/哥窑/Seedance 2.02605312117_9696_竹林视频，左侧中轴线.mp4'
    };
    var homeKilnIntroTexts = {
        0: {
            english: 'Ru Kiln',
            period: 'Northern Song · 960-1127',
            mark: '汝',
            title: '天青釉韵',
            subtitle: '汝窑',
            body: '釉色如雨过天青，汁水莹厚，蟹爪纹开，底有芝麻钉痕，香灰胎质，为宋瓷之冠。',
            accent: '#4f9aaa'
        },
        1: {
            english: 'Guan Kiln',
            period: 'Southern Song · Imperial Ware',
            mark: '官',
            title: '紫口铁足',
            subtitle: '官窑 — The Imperial Official Kiln',
            body: '釉厚若堆脂，纹取冰裂、鳝血，口沿釉薄露紫，足际无釉呈铁色，乃汴京、杭州内廷所烧。',
            accent: '#6f5a73'
        },
        2: {
            english: 'Ge Kiln',
            period: 'Southern Song · Crackle Glaze',
            mark: '哥',
            title: '金丝铁线',
            subtitle: '哥窑',
            body: '纹裂百变，黑黄二色相间如丝网；釉色灰青或米黄，胎骨似铁，多‘攒珠聚球’之气泡。',
            accent: '#8b7355'
        },
        3: {
            english: 'Jun Kiln',
            period: 'Northern Song to Yuan · Flame Transmutation',
            mark: '钧',
            title: '窑变万彩',
            subtitle: '钧窑',
            body: '釉呈夕阳红、月天色，蓝紫交融如烟霞；蚯蚓走泥纹为记，胎质厚重，一窑出千色。',
            accent: '#7a4f9f'
        },
        4: {
            english: 'Ding Kiln',
            period: 'Northern Song · Ivory White Porcelain',
            mark: '定',
            title: '白定芒口',
            subtitle: '定窑 — Ivory Light in Clay',
            body: '釉白莹润如粉，刻花莲、萱纹于其上；口沿不施釉，以金银镶扣，多为碗盘，覆烧成之。',
            accent: '#a8844f'
        }
    };
    var modelResizeHandler = null;
    var modelDragState = {
        active: false,
        pointerId: null,
        lastX: 0,
        lastY: 0,
        totalMove: 0,
        suppressClick: false
    };
    var kilnBackgroundMap = {
        0: 'images/汝窑.png',
        1: 'images/官窑.png',
        2: 'images/哥窑.png',
        3: 'images/钧窑.png',
        4: 'images/定窑.png'
    };

    var RU_PLATE_INFO = {
        title: '汝窑天青釉盘',
        subtitle: '北京故宫博物院藏 · 汝窑盘中尺寸最大者',
        sections: [
            { title: '一、文物地位', items: [
                '北京故宫博物院藏品，为全球传世汝窑盘中尺寸最大者。',
                '釉色天青纯正，温润清雅，在汝窑器物中堪称一绝。'
            ]},
            { title: '二、年代与窑址', items: [
                '据考证，烧造于宋哲宗元祐元年（1086年）至宋徽宗崇宁五年（1106年）之间。',
                '窑址位于河南省宝丰清凉寺。'
            ]},
            { title: '三、尺寸与器形', items: [
                '高3厘米，口径17.1厘米，足径9.1厘米。',
                '器形为撇口、浅弧壁、坦底，圈足外撇。'
            ]},
            { title: '四、釉面特征', items: [
                '通体施天青色釉，釉面开细密鱼鳞状片纹。',
                '外底留有3个芝麻状支钉痕，体现“芝麻挣钉釉满足”的典型特征。'
            ]}
        ]
    };

    var ARTIFACT_INFO_BY_NAME = {
        '汝窑天青釉弦纹三足樽': {
            title: '汝窑天青釉弦纹三足樽',
            subtitle: '北京故宫博物院藏 · 仿汉铜樽造型，汝窑罕见大器',
            sections: [
                { title: '一、文物地位', items: ['北京故宫博物院藏，为汝窑传世品中罕见的仿青铜礼器造型。', '三足弦纹，端庄肃穆，属汝窑顶级珍品。'] },
                { title: '二、年代与窑址', items: ['烧造于北宋哲宗至徽宗年间（1086-1106年）。', '窑址位于河南省宝丰清凉寺。'] },
                { title: '三、尺寸与器形', items: ['高12.9厘米，口径18厘米，足距17.8厘米。', '器形仿汉代铜樽，直口、筒腹、平底，下承三足，外壁凸起弦纹三组。'] },
                { title: '四、釉面特征', items: ['通体施天青釉，釉质莹润如玉，釉面开细碎冰裂纹。', '底有五个芝麻状支钉痕，三足足底无釉，露香灰色胎。'] }
            ]
        },
        '汝窑天青釉盘': RU_PLATE_INFO,
        '汝窑天青釉碗': {
            title: '汝窑天青釉碗',
            subtitle: '北京故宫博物院藏 · 汝窑碗式标准器',
            sections: [
                { title: '一、文物地位', items: ['北京故宫博物院藏，造型简约大方。', '为汝窑碗类中的标准器，釉色极佳。'] },
                { title: '二、年代与窑址', items: ['北宋晚期（1086-1106年）。', '河南宝丰清凉寺窑址。'] },
                { title: '三、尺寸与器形', items: ['高6.7厘米，口径17.1厘米，足径7.7厘米。', '敞口、深弧腹、圈足，整体线条流畅。'] },
                { title: '四、釉面特征', items: ['通体施天青釉，釉面匀净，开细密鱼鳞状片纹。', '外底有五枚芝麻状支钉痕，露胎处呈香灰色。'] }
            ]
        },
        '汝窑莲花式温碗': {
            title: '汝窑莲花式温碗',
            subtitle: '台北故宫博物院藏 · 传世唯一汝窑莲花形温碗',
            sections: [
                { title: '一、文物地位', items: ['台北故宫博物院藏，传世汝窑中唯一的莲花形温碗。', '造型优美，为北宋宫廷温酒器具。'] },
                { title: '二、年代与窑址', items: ['北宋晚期（1086-1106年）。', '河南宝丰清凉寺窑址。'] },
                { title: '三、尺寸与器形', items: ['高10.4厘米，口径16.2厘米，足径8厘米。', '碗口呈十瓣莲花形，深弧腹，圈足，整体如盛开莲花。'] },
                { title: '四、釉面特征', items: ['通体施天青釉，釉层匀润，布满细碎开片。', '器底有五枚支钉痕，胎质香灰，工艺极精。'] }
            ]
        },
        '汝窑天青釉葵花洗': {
            title: '汝窑天青釉葵花洗',
            subtitle: '台北故宫博物院藏 · 汝窑洗类经典',
            sections: [
                { title: '一、文物地位', items: ['台北故宫博物院藏，汝窑洗类中的经典之作。', '造型仿六瓣葵花，清雅秀丽。'] },
                { title: '二、年代与窑址', items: ['北宋晚期（1086-1106年）。', '河南宝丰清凉寺窑址。'] },
                { title: '三、尺寸与器形', items: ['高3.3厘米，口径12.8厘米，足径8.9厘米。', '口沿呈六瓣葵花形，浅弧壁，圈足微外撇。'] },
                { title: '四、釉面特征', items: ['通体施天青釉，釉面凝润，开细碎纹片。', '外底有五个细小芝麻支钉痕。'] }
            ]
        },
        '官窑青釉方花盆': {
            title: '官窑青釉方花盆',
            subtitle: '北京故宫博物院藏 · 官窑方器罕见',
            sections: [
                { title: '一、文物地位', items: ['北京故宫博物院藏，官窑传世品中方形花盆极为罕见。', '造型方正，庄重典雅。'] },
                { title: '二、年代与窑址', items: ['南宋，杭州官窑。'] },
                { title: '三、尺寸与器形', items: ['高9.6厘米，口径12.1x12.1厘米，足径7.3x7.3厘米。', '口呈正方形，直壁，四角内削，底有四个支烧痕。'] },
                { title: '四、釉面特征', items: ['釉色青中泛灰，釉面开大小纹片。', '口沿呈紫口，底足露铁胎。'] }
            ]
        },
        '官窑青釉葵花式洗': {
            title: '官窑青釉葵花式洗',
            subtitle: '北京故宫博物院藏 · 官窑洗类精品',
            sections: [
                { title: '一、文物地位', items: ['北京故宫博物院藏，葵花式洗为官窑常见形制。', '此件釉色尤佳，为洗中上品。'] },
                { title: '二、年代与窑址', items: ['南宋，杭州郊坛下官窑。'] },
                { title: '三、尺寸与器形', items: ['高4.2厘米，口径12.4厘米，足径8.5厘米。', '口沿呈八瓣葵花形，浅腹，圈足。'] },
                { title: '四、釉面特征', items: ['釉色青灰，釉质厚润，通体开大小片纹。', '口沿紫褐，足端无釉露铁胎。'] }
            ]
        },
        '官窑青釉贯耳瓶': {
            title: '官窑青釉贯耳瓶',
            subtitle: '北京故宫博物院藏 · 仿汉铜贯耳壶形',
            sections: [
                { title: '一、文物地位', items: ['北京故宫博物院藏，官窑贯耳瓶传世多件。', '此件釉色沉稳，形制古雅。'] },
                { title: '二、年代与窑址', items: ['南宋，杭州官窑。'] },
                { title: '三、尺寸与器形', items: ['高23.7厘米，口径8.5厘米，足径9.5厘米。', '直口、长颈、扁圆腹，颈部对称置贯耳，腹有弦纹。'] },
                { title: '四、釉面特征', items: ['釉色灰青，釉层厚润，釉面开片不规则。', '口沿紫褐，足端露铁胎。'] }
            ]
        },
        '哥窑青釉葵瓣口盘': {
            title: '哥窑青釉葵瓣口盘',
            subtitle: '北京故宫博物院藏 · 哥窑盘类典型',
            sections: [
                { title: '一、文物地位', items: ['北京故宫博物院藏，葵瓣口盘是哥窑常见器形。', '此件开片精美，金丝铁线分明。'] },
                { title: '二、年代与窑址', items: ['南宋，窑址未完全确认（浙江龙泉或杭州）。'] },
                { title: '三、尺寸与器形', items: ['高3.5厘米，口径16.2厘米，足径6.1厘米。', '口沿呈六瓣葵花形，浅腹，圈足。'] },
                { title: '四、釉面特征', items: ['釉色灰青，通体开片，大纹呈黑褐色，小纹呈金黄色。', '底足无釉，露灰黑色胎。'] }
            ]
        },
        '哥窑灰青釉胆式瓶': {
            title: '哥窑胆式瓶',
            subtitle: '北京故宫博物院藏 · 哥窑瓶中经典',
            sections: [
                { title: '一、文物地位', items: ['北京故宫博物院藏，胆式瓶为宋瓷经典造型。', '哥窑传世胆瓶极罕见，此件堪称孤品。'] },
                { title: '二、年代与窑址', items: ['南宋，哥窑窑址待考。'] },
                { title: '三、尺寸与器形', items: ['高12.5厘米，口径2.2厘米，足径4.5厘米。', '小口、细长颈、圆腹下垂如垂胆，圈足。'] },
                { title: '四、釉面特征', items: ['釉色米黄，釉面密布金丝铁线。', '釉中气泡密集如“攒珠”，底足露胎呈铁黑色。'] }
            ]
        },
        '哥窑青釉菊瓣式盘': {
            title: '哥窑青釉菊瓣式盘',
            subtitle: '北京故宫博物院藏 · 菊瓣形盘哥窑罕见',
            sections: [
                { title: '一、文物地位', items: ['北京故宫博物院藏，菊瓣式盘在哥窑中少见。', '线条优美，开片极富装饰性。'] },
                { title: '二、年代与窑址', items: ['南宋，窑址待考。'] },
                { title: '三、尺寸与器形', items: ['高3.2厘米，口径15.6厘米，足径5.8厘米。', '口沿呈三十余瓣菊花形，浅弧腹，圈足。'] },
                { title: '四、釉面特征', items: ['釉色青灰泛米黄，釉面遍布金丝铁线。', '底有支钉痕数枚，露深灰胎。'] }
            ]
        },
        '哥窑青釉葵花式洗': {
            title: '哥窑灰釉葵花式洗',
            subtitle: '北京故宫博物院藏 · 灰釉哥窑独特品种',
            sections: [
                { title: '一、文物地位', items: ['北京故宫博物院藏，灰釉为哥窑少见釉色。', '此件釉色古朴，开片别具风韵。'] },
                { title: '二、年代与窑址', items: ['南宋，哥窑窑址待考。'] },
                { title: '三、尺寸与器形', items: ['高3.8厘米，口径13.1厘米，足径8.5厘米。', '口沿呈八瓣葵花形，浅腹，圈足。'] },
                { title: '四、釉面特征', items: ['釉色灰中泛青，釉面开金丝铁线纹。', '片纹细密错落，底足露灰褐色胎。'] }
            ]
        },
        '哥窑纸槌瓶': {
            title: '哥窑纸槌瓶',
            subtitle: '北京故宫博物院藏 · 哥窑仿官式纸槌瓶',
            sections: [
                { title: '一、文物地位', items: ['北京故宫博物院藏，纸槌瓶为宋代经典瓶式。', '哥窑传世极少，此件极为珍贵。'] },
                { title: '二、年代与窑址', items: ['南宋，窑址待考。'] },
                { title: '三、尺寸与器形', items: ['高12.8厘米，口径4.2厘米，足径5.5厘米。', '直口、长直颈、折肩、筒腹、圈足，形如纸槌。'] },
                { title: '四、釉面特征', items: ['釉色青灰泛米黄，釉面布满金丝铁线。', '口沿釉薄处微显深色胎，底足无釉露铁胎。'] }
            ]
        }
    };

    ARTIFACT_INFO_BY_NAME['钧窑玫瑰紫釉出戟尊'] = {
        title: '钧窑玫瑰紫釉出戟尊',
        subtitle: '北京故宫博物院藏 · 钧窑仿青铜礼器重器',
        sections: [
            { title: '一、文物地位', items: ['北京故宫博物院藏，出戟尊为钧窑中最高等级之礼器。', '玫瑰紫釉为钧窑极品。'] },
            { title: '二、年代与窑址', items: ['北宋晚期至金代（12世纪）。', '河南禹县钧台窑。'] },
            { title: '三、尺寸与器形', items: ['高21.5厘米，口径20.5厘米，足径14.2厘米。', '口呈喇叭形、鼓腹、高圈足，腹部及四角出戟。'] },
            { title: '四、釉面特征', items: ['釉色以玫瑰紫为主，内壁天蓝与紫斑交融。', '釉面有“蚯蚓走泥纹”典型特征，底刻“五”字款。'] }
        ]
    };
    ARTIFACT_INFO_BY_NAME['钧窑月白釉出戟尊'] = ARTIFACT_INFO_BY_NAME['钧窑玫瑰紫釉出戟尊'];
    ARTIFACT_INFO_BY_NAME['钧窑菱花式花盆'] = {
        title: '钧窑菱花式花盆',
        subtitle: '北京故宫博物院藏 · 钧窑花盆经典形制',
        sections: [
            { title: '一、文物地位', items: ['北京故宫博物院藏，菱花式花盆为钧窑宫廷陈设瓷代表作。', '底部多刻有数字款。'] },
            { title: '二、年代与窑址', items: ['北宋晚期至金代，河南禹县钧台窑。'] },
            { title: '三、尺寸与器形', items: ['高13.5厘米，口径23.7厘米，足径9.5厘米。', '口沿呈六瓣菱花形，深腹，圈足外撇。'] },
            { title: '四、釉面特征', items: ['釉色天青与紫红斑块相间，釉面光亮。', '可见蚯蚓走泥纹，底刻“六”字款。'] }
        ]
    };
    ARTIFACT_INFO_BY_NAME['钧窑玫瑰紫釉鼓钉三足洗'] = {
        title: '钧窑鼓钉洗',
        subtitle: '北京故宫博物院藏 · 钧窑洗类典型',
        sections: [
            { title: '一、文物地位', items: ['北京故宫博物院藏，鼓钉洗因外壁饰鼓钉纹而得名。', '为钧窑常见但极富特色之器。'] },
            { title: '二、年代与窑址', items: ['北宋晚期至金代，河南禹县钧台窑。'] },
            { title: '三、尺寸与器形', items: ['高9.3厘米，口径24.5厘米，足距16.5厘米。', '敞口、浅腹、平底，下承三足，外壁上下各饰一圈鼓钉纹。'] },
            { title: '四、釉面特征', items: ['釉色天青，器内有大片玫瑰紫斑。', '釉面蚯蚓走泥纹清晰，外底刻“三”字款。'] }
        ]
    };
    ARTIFACT_INFO_BY_NAME['钧窑天蓝釉红斑碗'] = {
        title: '钧窑天蓝釉红斑碗',
        subtitle: '北京故宫博物院藏 · 钧窑碗类标准器',
        sections: [
            { title: '一、文物地位', items: ['北京故宫博物院藏，天蓝釉加红斑为钧窑经典装饰。', '此碗红斑艳丽，极为悦目。'] },
            { title: '二、年代与窑址', items: ['金代（12-13世纪），河南禹县钧窑系。'] },
            { title: '三、尺寸与器形', items: ['高4.6厘米，口径12.5厘米，足径4.2厘米。', '敞口、深弧腹、圈足。'] },
            { title: '四、釉面特征', items: ['釉色天蓝纯净，内壁及口沿饰紫红斑块。', '红蓝相映，釉面有细小开片，足端无釉露灰胎。'] }
        ]
    };
    ARTIFACT_INFO_BY_NAME['定窑白釉孩儿枕'] = {
        title: '定窑白釉孩儿枕',
        subtitle: '北京故宫博物院藏 · 定窑瓷塑巅峰之作',
        sections: [
            { title: '一、文物地位', items: ['北京故宫博物院藏，定窑瓷塑中最为著名者。', '以孩儿为枕形，构思巧妙，为宋代瓷枕极品。'] },
            { title: '二、年代与窑址', items: ['北宋晚期（11-12世纪），河北曲阳定窑。'] },
            { title: '三、尺寸与器形', items: ['高17.7厘米，长34厘米，宽24厘米。', '以侧卧孩儿为枕身，孩儿双臂抱枕，神态安详，衣纹流畅。'] },
            { title: '四、釉面特征', items: ['通体施白釉微泛象牙黄，釉面莹润。', '背部及底部露胎处呈牙白色坚致胎体，印花、划花并用。'] }
        ]
    };
    ARTIFACT_INFO_BY_NAME['定窑白釉刻莲纹龙首净瓶'] = {
        title: '定窑白釉刻莲纹龙首净瓶',
        subtitle: '北京故宫博物院藏 · 定窑净瓶最高大者',
        sections: [
            { title: '一、文物地位', items: ['北京故宫博物院藏，定窑净瓶中形体最高大者。', '刻莲纹精细，龙首流生动。'] },
            { title: '二、年代与窑址', items: ['北宋，河北曲阳定窑。'] },
            { title: '三、尺寸与器形', items: ['高60.5厘米，口径4.5厘米，足径11厘米。', '直口、长颈、鼓腹，肩部一侧置龙首长流，另一侧贴塑龙尾。'] },
            { title: '四、釉面特征', items: ['釉色白中泛牙黄，腹部刻覆莲瓣纹。', '刀法犀利，釉面光润，足端无釉露白胎。'] }
        ]
    };
    ARTIFACT_INFO_BY_NAME['定窑褐地牡丹花擎荷叶娃娃枕'] = {
        title: '定窑褐地牡丹花擎荷叶娃娃枕',
        subtitle: '北京故宫博物院藏 · 定窑褐彩瓷塑珍品',
        sections: [
            { title: '一、文物地位', items: ['北京故宫博物院藏，定窑罕见褐地彩绘瓷枕。', '以娃娃擎荷叶为形，情趣盎然。'] },
            { title: '二、年代与窑址', items: ['金代（12-13世纪），河北曲阳定窑。'] },
            { title: '三、尺寸与器形', items: ['高11.5厘米，长22.5厘米，宽17.5厘米。', '枕面为一片大荷叶，叶下一童子双手擎叶，天真活泼。'] },
            { title: '四、釉面特征', items: ['白釉为底，叶面与童子衣饰施褐彩。', '釉面温润，胎质细腻，底部未施釉。'] }
        ]
    };
    ARTIFACT_INFO_BY_NAME['定窑白釉花瓣形碗'] = {
        title: '定窑白釉花瓣形碗',
        subtitle: '北京故宫博物院藏 · 定窑碗类经典',
        sections: [
            { title: '一、文物地位', items: ['北京故宫博物院藏，花瓣形碗为定窑常见又极具美感的日用器。', '造型轻盈秀丽。'] },
            { title: '二、年代与窑址', items: ['北宋，河北曲阳定窑。'] },
            { title: '三、尺寸与器形', items: ['高5.3厘米，口径15.2厘米，足径4.8厘米。', '口沿呈五瓣花形，腹壁浅弧，圈足。'] },
            { title: '四、釉面特征', items: ['通体施白釉，釉色牙白。', '碗心刻划折枝花卉纹，口沿无釉（芒口），原可能镶金属扣。'] }
        ]
    };
    ARTIFACT_INFO_BY_NAME['定窑白釉印花云龙纹盘'] = {
        title: '定窑白釉印花云龙纹盘',
        subtitle: '北京故宫博物院藏 · 定窑印花纹饰极品',
        sections: [
            { title: '一、文物地位', items: ['北京故宫博物院藏，定窑印花盘中的巅峰之作。', '云龙纹刻画精细，为宫廷用器。'] },
            { title: '二、年代与窑址', items: ['北宋晚期，河北曲阳定窑。'] },
            { title: '三、尺寸与器形', items: ['高4.5厘米，口径18.7厘米，足径7.3厘米。', '敞口、浅腹、圈足，口沿为芒口。'] },
            { title: '四、釉面特征', items: ['釉色白中泛牙黄，盘内印花云龙纹。', '龙身矫健，云纹流畅，纹饰清晰，布局饱满，芒口处原镶金属扣。'] }
        ]
    };

    /**
     * 渲染右侧六段色条导航布局
     */
    function renderPentagon() {
        var nodes = document.querySelectorAll('.kiln-node');
        if (nodes.length !== 5) return;
        var h = window.innerHeight;
        var itemHeight = h / 6;

        for (var i = 0; i < 5; i++) {
            nodes[i].style.left = 'auto';
            nodes[i].style.right = '0';
            nodes[i].style.top = ((i + 1) * itemHeight) + 'px';
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
     * 显示制瓷入口诗句
     */
    function showMakerPoem() {
        if (isShowing) return;
        hideHomeHoverModel();
        isShowing = true;
        currentIndex = -1;

        poemText.textContent = '窑火通明两岸红，夜阑惊起还乡梦';
        poemText.style.display = '';
        introPanel.style.display = 'none';

        poemOverlay.style.display = 'flex';
        void poemOverlay.offsetWidth;
        poemOverlay.classList.add('active');

        setTimeout(function () {
            poemText.classList.add('show');
        }, 100);

        poemTimer = setTimeout(function () {
            poemText.classList.remove('show');
            setTimeout(function() {
                poemOverlay.classList.remove('active');
                poemOverlay.style.display = 'none';
                poemText.style.display = '';
                isShowing = false;
                document.getElementById('main-content').classList.remove('maker-word-hover', 'maker-word-exit');
                document.getElementById('main-content').style.display = 'none';
                document.getElementById('porcelain-maker').classList.add('active');
                if (window.initPorcelainMaker) {
                    window.initPorcelainMaker();
                }
            }, 500);
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

    function renderArtifactHTML(data) {
        var html = '<div class="intro-subtitle">' + data.subtitle + '</div>';
        for (var i = 0; i < data.sections.length; i++) {
            var sec = data.sections[i];
            html += '<div class="intro-section">';
            html += '<div class="intro-section-title">' + sec.title + '</div>';
            html += '<ul class="intro-items">';
            for (var j = 0; j < sec.items.length; j++) {
                html += '<li>' + sec.items[j] + '</li>';
            }
            html += '</ul>';
            html += '</div>';
        }
        return html;
    }

    function typeArtifactText(container) {
        var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
        var nodes = [];
        while (walker.nextNode()) {
            nodes.push({
                node: walker.currentNode,
                text: walker.currentNode.nodeValue
            });
        }
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].node.nodeValue = '';
        }
        var nodeIndex = 0;
        var charIndex = 0;
        if (artifactInfoTimer) {
            clearTimeout(artifactInfoTimer);
            artifactInfoTimer = null;
        }
        function tick() {
            if (nodeIndex >= nodes.length) {
                artifactInfoTimer = null;
                return;
            }
            var item = nodes[nodeIndex];
            item.node.nodeValue += item.text.charAt(charIndex);
            charIndex++;
            if (charIndex >= item.text.length) {
                nodeIndex++;
                charIndex = 0;
            }
            artifactInfoTimer = setTimeout(tick, 24);
        }
        tick();
    }

    function switchIntroContent(title, html, shouldType) {
        if (!introTitle || !introContent) return;
        if (artifactInfoTimer) {
            clearTimeout(artifactInfoTimer);
            artifactInfoTimer = null;
        }
        introTitle.classList.add('intro-fading');
        introContent.classList.add('intro-fading');
        setTimeout(function() {
            introTitle.textContent = title;
            introContent.innerHTML = html;
            introTitle.classList.remove('intro-fading');
            introContent.classList.remove('intro-fading');
            introTitle.classList.add('intro-appearing');
            introContent.classList.add('intro-appearing');
            setTimeout(function() {
                introTitle.classList.remove('intro-appearing');
                introContent.classList.remove('intro-appearing');
            }, 650);
        }, 650);
    }

    function getArtifactInfoForPath(path) {
        if (!path) return null;
        var normalized = path.replace(/\\/g, '/');
        var fileName = normalized.split('/').pop() || '';
        var artifactName = fileName.replace(/\.glb$/i, '');
        return ARTIFACT_INFO_BY_NAME[artifactName] || null;
    }

    function showArtifactInfo(info) {
        if (!info) return;
        switchIntroContent(info.title, renderArtifactHTML(info), false);
    }

    function restoreCurrentIntroInfo() {
        if (!currentIntroData) return;
        switchIntroContent(currentIntroData.name, renderIntroHTML(currentIntroData), false);
    }

    /**
     * 显示介绍面板
     */
    function showIntro(data, index) {
        currentIntroData = data;
        currentIntroIndex = index;
        if (modelAnimationId) {
            cancelAnimationFrame(modelAnimationId);
            modelAnimationId = null;
        }
        if (modelRenderer && modelRenderer.domElement) {
            modelRenderer.domElement.removeEventListener('click', onGalleryModelClick);
        }
        unbindModelPointerControls(modelRenderer);
        if (modelRenderer) {
            modelRenderer.dispose();
            modelRenderer = null;
        }
        if (modelResizeHandler) {
            window.removeEventListener('resize', modelResizeHandler);
            modelResizeHandler = null;
        }
        destroyGestureControls();
        modelScene = null;
        modelCamera = null;
        modelRaycaster = null;
        modelPointer = null;
        galleryModels = [];
        selectedGalleryModel = null;
        if (introModel) {
            introModel.classList.remove('ruyao-gallery');
            introModel.innerHTML = '';
        }
        introTitle.textContent = data.name;
        introContent.innerHTML = renderIntroHTML(data);
        introPanel.style.setProperty('--kiln-bg-image', 'url("' + (kilnBackgroundMap[index] || '') + '")');

        // 所有窑口统一使用左右分栏布局
        introPanel.classList.add('has-model');
        introPanel.style.display = 'flex';
        void introPanel.offsetWidth;
        introPanel.classList.add('show');

        // 延迟初始化左侧模型/占位区域
        setTimeout(function () {
            if (index === 0 || index === 1 || index === 2 || index === 3 || index === 4) {
                initKilnModelGallery(index);
            } else {
                showKilnPlaceholder(index);
            }
        }, 300);
    }

    /**
     * 初始化汝窑 3D 模型
     */
    function getKilnModelFiles(index) {
        if (index === 0) {
            return [
                '瓷器模型/汝窑24.9.glb',
                '瓷器模型/汝窑/汝窑天青釉弦纹三足樽.glb',
                '瓷器模型/汝窑/汝窑天青釉盘.glb',
                '瓷器模型/汝窑/汝窑天青釉碗.glb',
                '瓷器模型/汝窑/汝窑天青釉葵花洗.glb',
                '瓷器模型/汝窑/汝窑莲花式温碗.glb'
            ];
        }
        if (index === 1) {
            return [
                '瓷器模型/官窑/官窑青釉方花盆.glb',
                '瓷器模型/官窑/官窑青釉葵花式洗.glb',
                '瓷器模型/官窑/官窑青釉贯耳瓶.glb'
            ];
        }
        if (index === 2) {
            return [
                '瓷器模型/哥窑/哥窑灰青釉胆式瓶.glb',
                '瓷器模型/哥窑/哥窑纸槌瓶.glb',
                '瓷器模型/哥窑/哥窑青釉菊瓣式盘.glb',
                '瓷器模型/哥窑/哥窑青釉葵瓣口盘.glb',
                '瓷器模型/哥窑/哥窑青釉葵花式洗.glb'
            ];
        }
        if (index === 3) {
            return [
                '瓷器模型/钧窑/钧窑天蓝釉红斑碗.glb',
                '瓷器模型/钧窑/钧窑月白釉出戟尊.glb',
                '瓷器模型/钧窑/钧窑玫瑰紫釉出戟尊.glb',
                '瓷器模型/钧窑/钧窑玫瑰紫釉鼓钉三足洗.glb',
                '瓷器模型/钧窑/钧窑菱花式花盆.glb'
            ];
        }
        if (index === 4) {
            return [
                '瓷器模型/定窑/定窑白釉刻莲纹龙首净瓶.glb',
                '瓷器模型/定窑/定窑白釉印花云龙纹盘.glb',
                '瓷器模型/定窑/定窑白釉孩儿枕.glb',
                '瓷器模型/定窑/定窑白釉花瓣形碗.glb',
                '瓷器模型/定窑/定窑褐地牡丹花擎荷叶娃娃枕.glb'
            ];
        }
        return [];
    }

    function normalizeModel(model, targetSize) {
        var box = new THREE.Box3().setFromObject(model);
        var center = box.getCenter(new THREE.Vector3());
        var size = box.getSize(new THREE.Vector3());
        var maxDim = Math.max(size.x, size.y, size.z);
        model.position.sub(center);
        if (maxDim > 0) {
            model.scale.setScalar(targetSize / maxDim);
        }
    }

    function cleanupHomeHoverModel() {
        homeHoverLoadToken++;
        if (homeHoverAnimationId) {
            cancelAnimationFrame(homeHoverAnimationId);
            homeHoverAnimationId = null;
        }
        if (homeHoverResizeHandler) {
            window.removeEventListener('resize', homeHoverResizeHandler);
            homeHoverResizeHandler = null;
        }
        if (homeHoverRenderer) {
            homeHoverRenderer.dispose();
            if (homeHoverRenderer.domElement && homeHoverRenderer.domElement.parentNode) {
                homeHoverRenderer.domElement.parentNode.removeChild(homeHoverRenderer.domElement);
            }
        }
        homeHoverRenderer = null;
        homeHoverScene = null;
        homeHoverCamera = null;
        homeHoverModel = null;
    }

    function showHomeHoverModel(kilnIndex) {
        var container = document.getElementById('home-hover-model');
        var videoPath = homeHoverVideoPaths[kilnIndex];
        if (!container || !videoPath) return;
        var homeBgCarousel = document.getElementById('home-bg-carousel');
        var homeBgReveal = document.getElementById('home-bg-reveal');
        if (homeBgCarousel) {
            homeBgCarousel.classList.add('paused');
        }
        if (homeBgReveal) {
            homeBgReveal.classList.remove('active');
        }
        var activeGroup = container.querySelector('.home-hover-video-group.active');
        if (activeGroup && activeGroup.getAttribute('data-video-src') === videoPath) {
            container.classList.add('show');
            Array.prototype.forEach.call(activeGroup.querySelectorAll('video'), function(video) {
                var playPromise = video.play();
                if (playPromise && playPromise.catch) {
                    playPromise.catch(function() {});
                }
            });
            return;
        }
        cleanupHomeHoverModel();
        var nextGroup = document.createElement('div');
        nextGroup.className = 'home-hover-video-group';
        nextGroup.setAttribute('data-video-src', videoPath);
        ['blur', 'clear'].forEach(function(layer) {
            var layerVideo = document.createElement('video');
            layerVideo.className = 'home-hover-video home-hover-video-' + layer;
            layerVideo.muted = true;
            layerVideo.loop = true;
            layerVideo.autoplay = true;
            layerVideo.playsInline = true;
            layerVideo.preload = 'auto';
            layerVideo.controls = false;
            layerVideo.disablePictureInPicture = true;
            layerVideo.disableRemotePlayback = true;
            layerVideo.setAttribute('controlsList', 'nodownload noplaybackrate noremoteplayback');
            layerVideo.setAttribute('webkit-playsinline', '');
            layerVideo.setAttribute('src', videoPath);
            layerVideo.addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });
            nextGroup.appendChild(layerVideo);
        });
        container.appendChild(nextGroup);
        container.classList.add('show');
        requestAnimationFrame(function() {
            nextGroup.classList.add('active');
            if (activeGroup) {
                activeGroup.classList.remove('active');
            }
        });
        Array.prototype.forEach.call(nextGroup.querySelectorAll('video'), function(currentVideo) {
            currentVideo.currentTime = 0;
            var playPromise = currentVideo.play();
            if (playPromise && playPromise.catch) {
                playPromise.catch(function() {});
            }
        });
        if (activeGroup) {
            setTimeout(function() {
                if (activeGroup.parentNode) {
                    Array.prototype.forEach.call(activeGroup.querySelectorAll('video'), function(video) {
                        video.pause();
                    });
                    activeGroup.parentNode.removeChild(activeGroup);
                }
            }, 950);
        }
    }

    function hideHomeHoverModel() {
        var container = document.getElementById('home-hover-model');
        if (container) {
            container.classList.remove('show');
        }
        setTimeout(function() {
            if (container && !container.classList.contains('show')) {
                var videos = container.querySelectorAll('video');
                Array.prototype.forEach.call(videos, function(video) {
                    video.pause();
                });
            }
        }, 850);
    }

    function showHomeKilnIntro(index) {
        var data = homeKilnIntroTexts[index];
        if (!homeKilnIntro || !homeKilnIntroTitle || !homeKilnIntroBody || !data) {
            hideHomeKilnIntro();
            return;
        }
        if (homeKilnIntroIndex === index && homeKilnIntro.classList.contains('show')) {
            return;
        }
        if (homeKilnIntroTimer) {
            clearTimeout(homeKilnIntroTimer);
            homeKilnIntroTimer = null;
        }
        if (homeKilnIntro.classList.contains('show') && homeKilnIntroIndex !== null) {
            homeKilnIntro.classList.remove('show');
            homeKilnIntroTimer = setTimeout(function() {
                renderHomeKilnIntro(index);
                homeKilnIntro.classList.add('show');
                homeKilnIntroTimer = null;
            }, 720);
            return;
        }
        renderHomeKilnIntro(index);
        homeKilnIntro.classList.add('show');
    }

    function renderHomeKilnIntro(index) {
        var data = homeKilnIntroTexts[index];
        if (!data || !homeKilnIntroTitle || !homeKilnIntroBody) return;
        homeKilnIntroTitle.innerHTML =
            '<span class="home-kiln-intro-period">' + data.period + '</span>' +
            '<span class="home-kiln-intro-mark">' + data.mark + '</span>' +
            '<span class="home-kiln-intro-english">' + data.english + '</span>' +
            '<span class="home-kiln-intro-subtitle">' + data.subtitle + '</span>' +
            '<span class="home-kiln-intro-rule"></span>' +
            '<span class="home-kiln-intro-heading">' + data.title + '</span>';
        homeKilnIntroBody.innerHTML = data.body.replace('蟹爪纹开，', '蟹爪纹开，<br>');
        if (homeKilnIntro) {
            homeKilnIntro.style.setProperty('--intro-accent', data.accent || '#315b63');
            homeKilnIntro.setAttribute('data-kiln-index', String(index));
        }
        homeKilnIntroIndex = index;
    }

    function hideHomeKilnIntro() {
        if (homeKilnIntroTimer) {
            clearTimeout(homeKilnIntroTimer);
            homeKilnIntroTimer = null;
        }
        if (homeKilnIntro) {
            homeKilnIntro.classList.remove('show');
        }
        homeKilnIntroIndex = null;
    }

    function setGalleryLayout() {
        var columns = 3;
        var spacingX = 1.8;
        var spacingY = 1.55;
        for (var i = 0; i < galleryModels.length; i++) {
            var entry = galleryModels[i];
            var row = Math.floor(i / columns);
            var col = i % columns;
            entry.basePosition.set((col - 1) * spacingX, (0.5 - row) * spacingY, 0);
            entry.group.position.copy(entry.basePosition);
            entry.group.scale.copy(entry.baseScale);
            entry.group.visible = true;
            entry.targetPosition.copy(entry.basePosition);
            entry.targetScale.copy(entry.baseScale);
            entry.targetOpacity = 1;
            entry.opacity = 1;
            setModelOpacity(entry.group, 1);
        }
    }

    function setModelOpacity(object, opacity) {
        object.traverse(function(child) {
            if (!child.material) return;
            var materials = Array.isArray(child.material) ? child.material : [child.material];
            for (var i = 0; i < materials.length; i++) {
                materials[i].transparent = opacity < 0.98;
                materials[i].opacity = opacity;
                materials[i].needsUpdate = true;
            }
        });
    }

    function focusGalleryModel(entry) {
        if (selectedGalleryModel === entry) {
            selectedGalleryModel = null;
            for (var i = 0; i < galleryModels.length; i++) {
                galleryModels[i].group.visible = true;
                galleryModels[i].targetPosition.copy(galleryModels[i].basePosition);
                galleryModels[i].targetScale.copy(galleryModels[i].baseScale);
                galleryModels[i].targetOpacity = 1;
            }
            if (getArtifactInfoForPath(entry && entry.path)) {
                restoreCurrentIntroInfo();
            }
            return;
        }

        selectedGalleryModel = entry;
        for (var j = 0; j < galleryModels.length; j++) {
            var item = galleryModels[j];
            if (item === entry) {
                item.group.visible = true;
                item.targetPosition.set(0, 0, 0);
                item.targetScale.copy(item.baseScale).multiplyScalar(2.85);
                item.targetOpacity = 1;
            } else {
                item.group.visible = true;
                item.targetPosition.copy(item.basePosition);
                item.targetScale.copy(item.baseScale).multiplyScalar(0.82);
                item.targetOpacity = 0;
            }
        }
        showArtifactInfo(getArtifactInfoForPath(entry && entry.path));
    }

    function updateGalleryModelTransitions() {
        for (var i = 0; i < galleryModels.length; i++) {
            var entry = galleryModels[i];
            entry.group.position.lerp(entry.targetPosition, 0.08);
            entry.group.scale.lerp(entry.targetScale, 0.08);
            entry.opacity += (entry.targetOpacity - entry.opacity) * 0.1;
            setModelOpacity(entry.group, entry.opacity);
            if (entry.targetOpacity === 0 && entry.opacity < 0.03) {
                entry.group.visible = false;
            } else {
                entry.group.visible = true;
            }
        }
    }

    function getInteractiveModelEntries() {
        if (galleryModels.length) {
            return selectedGalleryModel ? [selectedGalleryModel] : galleryModels;
        }
        return [];
    }

    function rotateInteractiveModels(deltaX) {
        var entries = getInteractiveModelEntries();
        var delta = deltaX * 0.01;
        for (var i = 0; i < entries.length; i++) {
            entries[i].group.rotation.y += delta;
        }
    }

    function tiltInteractiveModels(deltaY) {
        var entries = getInteractiveModelEntries();
        var delta = deltaY * 0.01;
        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            entry.group.rotation.x = Math.max(-0.95, Math.min(0.95, entry.group.rotation.x + delta));
        }
    }

    function scaleInteractiveModels(scaleFactor) {
        var entries = getInteractiveModelEntries();
        scaleFactor = Math.max(0.92, Math.min(1.08, scaleFactor));
        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            entry.targetScale.multiplyScalar(scaleFactor);
            entry.targetScale.x = Math.max(0.35, Math.min(5.5, entry.targetScale.x));
            entry.targetScale.y = Math.max(0.35, Math.min(5.5, entry.targetScale.y));
            entry.targetScale.z = Math.max(0.35, Math.min(5.5, entry.targetScale.z));
        }
    }

    function initGestureControls() {
        if (document.getElementById('gesture-control')) return;

        var control = document.createElement('div');
        control.id = 'gesture-control';
        control.innerHTML = '<canvas id="gesture-page-skeleton"></canvas><div id="gesture-status">手势控制：开启后左右移动手掌旋转模型，上下移动倾斜，拇指食指捏合缩放。</div><div id="gesture-preview-wrap"><video id="gesture-preview" playsinline muted></video><canvas id="gesture-skeleton"></canvas></div><button id="gesture-toggle" type="button">手势</button>';
        document.body.appendChild(control);

        var toggle = document.getElementById('gesture-toggle');
        var video = document.getElementById('gesture-preview');
        var skeletonCanvas = document.getElementById('gesture-skeleton');
        var skeletonCtx = skeletonCanvas ? skeletonCanvas.getContext('2d') : null;
        var pageSkeletonCanvas = document.getElementById('gesture-page-skeleton');
        var pageSkeletonCtx = pageSkeletonCanvas ? pageSkeletonCanvas.getContext('2d') : null;
        var status = document.getElementById('gesture-status');
        var active = false;
        var stream = null;
        var hands = null;
        var rafId = null;
        var lastPalm = null;
        var lastPinch = null;
        var loadingPromise = null;
        var processingFrame = false;
        var middlePinchSelecting = false;
        var middlePinchCooldownUntil = 0;
        var handConnections = [
            [0, 1], [1, 2], [2, 3], [3, 4],
            [0, 5], [5, 6], [6, 7], [7, 8],
            [0, 9], [9, 10], [10, 11], [11, 12],
            [0, 13], [13, 14], [14, 15], [15, 16],
            [0, 17], [17, 18], [18, 19], [19, 20],
            [5, 9], [9, 13], [13, 17], [17, 5]
        ];

        function setStatus(text) {
            if (status) status.textContent = text;
        }

        function loadScript(src) {
            return new Promise(function(resolve, reject) {
                var existing = document.querySelector('script[src="' + src + '"]');
                if (existing) {
                    if (existing.getAttribute('data-loaded') === 'true') {
                        resolve();
                    } else {
                        existing.addEventListener('load', resolve, { once: true });
                        existing.addEventListener('error', reject, { once: true });
                    }
                    return;
                }
                var script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = function() {
                    script.setAttribute('data-loaded', 'true');
                    resolve();
                };
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }

        function ensureHandsLoaded() {
            if (window.Hands) return Promise.resolve();
            if (!loadingPromise) {
                loadingPromise = Promise.all([
                    loadScript('libs/mediapipe/hands/hands.js')
                ]);
            }
            return loadingPromise;
        }

        function resizePreviewSkeletonCanvas() {
            if (!skeletonCanvas || !video) return;
            var width = video.videoWidth || 320;
            var height = video.videoHeight || 240;
            if (skeletonCanvas.width !== width || skeletonCanvas.height !== height) {
                skeletonCanvas.width = width;
                skeletonCanvas.height = height;
            }
        }

        function resizePageSkeletonCanvas() {
            if (!pageSkeletonCanvas) return;
            var width = window.innerWidth || document.documentElement.clientWidth || 1;
            var height = window.innerHeight || document.documentElement.clientHeight || 1;
            if (pageSkeletonCanvas.width !== width || pageSkeletonCanvas.height !== height) {
                pageSkeletonCanvas.width = width;
                pageSkeletonCanvas.height = height;
            }
        }

        function clearSkeleton() {
            if (skeletonCtx && skeletonCanvas) {
                skeletonCtx.clearRect(0, 0, skeletonCanvas.width, skeletonCanvas.height);
            }
            if (pageSkeletonCtx && pageSkeletonCanvas) {
                pageSkeletonCtx.clearRect(0, 0, pageSkeletonCanvas.width, pageSkeletonCanvas.height);
            }
        }

        function drawSkeletonLayer(ctx, canvas, results, options) {
            if (!ctx || !canvas) return;
            options = options || {};
            var landmarksList = results && results.multiHandLandmarks ? results.multiHandLandmarks : [];
            for (var h = 0; h < landmarksList.length; h++) {
                var hand = landmarksList[h];
                var accent = h === 0 ? '#74c7d8' : '#9cc7f2';
                var action = getHandAction(hand);
                var lineWidth = options.lineWidth || 3;
                var pointScale = options.pointScale || 1;
                var labelColor = options.labelColor || 'rgba(255, 255, 255, 0.9)';

                ctx.save();
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = accent;
                ctx.shadowColor = 'rgba(35, 98, 116, 0.28)';
                ctx.shadowBlur = options.shadowBlur || 8;

                for (var i = 0; i < handConnections.length; i++) {
                    var from = hand[handConnections[i][0]];
                    var to = hand[handConnections[i][1]];
                    ctx.beginPath();
                    ctx.moveTo(getSkeletonX(from, canvas, options), from.y * canvas.height);
                    ctx.lineTo(getSkeletonX(to, canvas, options), to.y * canvas.height);
                    ctx.stroke();
                }

                ctx.shadowBlur = 0;
                for (var j = 0; j < hand.length; j++) {
                    var point = hand[j];
                    var radius = ([4, 8, 12, 16, 20].indexOf(j) !== -1 ? 4.2 : 2.7) * pointScale;
                    ctx.beginPath();
                    ctx.fillStyle = j === 4 || j === 8 ? '#ffffff' : accent;
                    ctx.strokeStyle = accent;
                    ctx.lineWidth = 1.5 * pointScale;
                    ctx.arc(getSkeletonX(point, canvas, options), point.y * canvas.height, radius, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                }

                if (action.pinching) {
                    var thumb = hand[action.pinchA || 4];
                    var targetFinger = hand[action.pinchB || 8];
                    var midPoint = { x: (thumb.x + targetFinger.x) * 0.5, y: (thumb.y + targetFinger.y) * 0.5 };
                    var cx = getSkeletonX(midPoint, canvas, options);
                    var cy = midPoint.y * canvas.height;
                    ctx.beginPath();
                    ctx.strokeStyle = '#ffffff';
                    ctx.lineWidth = 2 * pointScale;
                    ctx.arc(cx, cy, 13 * pointScale, 0, Math.PI * 2);
                    ctx.stroke();
                }

                var wrist = hand[0];
                if (options.showLabel !== false) {
                    ctx.fillStyle = labelColor;
                    ctx.font = (options.fontSize || 14) + 'px "Noto Serif SC", serif';
                    ctx.fillText(action.label, getSkeletonX(wrist, canvas, options) + 8, wrist.y * canvas.height - 8);
                }
                ctx.restore();
            }
        }

        function getSkeletonX(point, canvas, options) {
            return (options && options.mirrorX ? 1 - point.x : point.x) * canvas.width;
        }

        function drawGestureSkeleton(results) {
            resizePreviewSkeletonCanvas();
            resizePageSkeletonCanvas();
            clearSkeleton();
            drawSkeletonLayer(skeletonCtx, skeletonCanvas, results, {
                lineWidth: 3,
                pointScale: 1,
                shadowBlur: 8,
                mirrorX: false,
                showLabel: true,
                labelColor: 'rgba(255, 255, 255, 0.9)'
            });
            drawSkeletonLayer(pageSkeletonCtx, pageSkeletonCanvas, results, {
                lineWidth: 5,
                pointScale: 1.55,
                shadowBlur: 16,
                mirrorX: true,
                showLabel: true,
                fontSize: 18,
                labelColor: 'rgba(44, 93, 106, 0.86)'
            });
        }

        function getHandAction(hand) {
            var thumbTip = hand[4];
            var indexTip = hand[8];
            var middleTip = hand[12];
            var wrist = hand[0];
            var indexPinch = Math.hypot(indexTip.x - thumbTip.x, indexTip.y - thumbTip.y);
            var middlePinch = Math.hypot(middleTip.x - thumbTip.x, middleTip.y - thumbTip.y);
            var spread = Math.hypot(middleTip.x - wrist.x, middleTip.y - wrist.y);

            if (middlePinch < 0.055) {
                return { label: '选择瓷器', pinching: true, pinchA: 4, pinchB: 12 };
            }
            if (indexPinch < 0.055) {
                return { label: '捏合缩放', pinching: true, pinchA: 4, pinchB: 8 };
            }
            if (spread > 0.34) {
                return { label: '移动旋转', pinching: false };
            }
            return { label: '手掌定位', pinching: false };
        }

        function handleMiddlePinchSelection(hand) {
            var now = Date.now();
            var thumbTip = hand[4];
            var middleTip = hand[12];
            var middlePinch = Math.hypot(middleTip.x - thumbTip.x, middleTip.y - thumbTip.y);

            if (middlePinch > 0.075) {
                middlePinchSelecting = false;
                return false;
            }

            if (middlePinch >= 0.055 || middlePinchSelecting || now < middlePinchCooldownUntil) {
                return false;
            }

            middlePinchSelecting = true;
            middlePinchCooldownUntil = now + 650;

            if (selectedGalleryModel) {
                focusGalleryModel(selectedGalleryModel);
                return true;
            }

            var pinchCenter = {
                x: (thumbTip.x + middleTip.x) * 0.5,
                y: (thumbTip.y + middleTip.y) * 0.5
            };
            var clientX = (1 - pinchCenter.x) * (window.innerWidth || document.documentElement.clientWidth || 1);
            var clientY = pinchCenter.y * (window.innerHeight || document.documentElement.clientHeight || 1);
            return focusGalleryModelAtClientPoint(clientX, clientY);
        }

        function onGestureResults(results) {
            if (!active || !results.multiHandLandmarks || !results.multiHandLandmarks.length) {
                lastPalm = null;
                lastPinch = null;
                middlePinchSelecting = false;
                clearSkeleton();
                return;
            }
            drawGestureSkeleton(results);

            var handCount = Math.min(results.multiHandLandmarks.length, 2);
            if (!galleryModels.length) {
                setStatus('已识别' + handCount + '只手。请先进入某个窑口详情界面，再用手势控制瓷器模型。');
                return;
            }

            var hand = results.multiHandLandmarks[0];
            var wrist = hand[0];
            var indexTip = hand[8];
            var thumbTip = hand[4];
            var palm = { x: wrist.x, y: wrist.y };
            var pinch = Math.hypot(indexTip.x - thumbTip.x, indexTip.y - thumbTip.y);
            var selectedByPinch = handleMiddlePinchSelection(hand);

            if (lastPalm) {
                rotateInteractiveModels((palm.x - lastPalm.x) * 900);
                tiltInteractiveModels((palm.y - lastPalm.y) * 700);
            }

            if (!middlePinchSelecting && lastPinch && Math.abs(pinch - lastPinch) > 0.006) {
                scaleInteractiveModels(1 + (pinch - lastPinch) * 2.2);
            }

            lastPalm = palm;
            lastPinch = pinch;
            setStatus(selectedByPinch ? '已通过中指和拇指捏合进入瓷器详情。' : '已识别' + handCount + '只手：移动手掌旋转/倾斜，食指拇指捏合缩放，中指拇指捏合选择瓷器。');
        }

        function frameLoop() {
            if (!active || !hands || !video || video.readyState < 2) {
                rafId = active ? requestAnimationFrame(frameLoop) : null;
                return;
            }
            if (!processingFrame) {
                processingFrame = true;
                hands.send({ image: video }).catch(function(error) {
                    console.warn('手势帧处理失败:', error);
                    setStatus('手势识别帧处理失败，请重新开启手势或刷新页面。');
                }).finally(function() {
                    processingFrame = false;
                });
            }
            rafId = requestAnimationFrame(frameLoop);
        }

        function startGesture() {
            if (active) return;
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                setStatus('当前浏览器不支持摄像头访问，请使用 Chrome/Edge 并通过本地服务器打开。');
                return;
            }
            setStatus('正在加载手势识别模型...');
            ensureHandsLoaded().then(function() {
                hands = new window.Hands({
                    locateFile: function(file) {
                        return 'libs/mediapipe/hands/' + file;
                    }
                });
                hands.setOptions({
                    maxNumHands: 2,
                    modelComplexity: 0,
                    minDetectionConfidence: 0.65,
                    minTrackingConfidence: 0.65
                });
                hands.onResults(onGestureResults);
                return navigator.mediaDevices.getUserMedia({
                    video: { width: 320, height: 240, facingMode: 'user' },
                    audio: false
                });
            }).then(function(mediaStream) {
                stream = mediaStream;
                video.srcObject = stream;
                return video.play();
            }).then(function() {
                active = true;
                control.classList.add('active');
                toggle.classList.add('active');
                toggle.textContent = '关闭手势';
                setStatus('手势控制已开启。请把手放入摄像头画面。');
                frameLoop();
            }).catch(function(error) {
                console.warn('手势控制启动失败:', error);
                setStatus('手势控制启动失败：请确认摄像头权限、网络和 HTTPS/localhost 环境。');
                stopGesture();
            });
        }

        function stopGesture() {
            active = false;
            processingFrame = false;
            lastPalm = null;
            lastPinch = null;
            middlePinchSelecting = false;
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            if (stream) {
                stream.getTracks().forEach(function(track) { track.stop(); });
                stream = null;
            }
            if (video) {
                video.pause();
                video.srcObject = null;
            }
            clearSkeleton();
            control.classList.remove('active');
            toggle.classList.remove('active');
            toggle.textContent = '手势';
            setStatus('手势控制：开启后可识别双手并显示手掌/手指骨架，移动手掌旋转模型，捏合缩放。');
        }

        control.stopGesture = stopGesture;
        toggle.addEventListener('click', function() {
            if (active) {
                stopGesture();
            } else {
                startGesture();
            }
        });
    }

    function destroyGestureControls() {
        var control = document.getElementById('gesture-control');
        if (!control) return;
        if (typeof control.stopGesture === 'function') {
            control.stopGesture();
        }
        control.remove();
    }

    function onModelPointerDown(event) {
        modelDragState.active = true;
        modelDragState.pointerId = event.pointerId;
        modelDragState.lastX = event.clientX;
        modelDragState.lastY = event.clientY;
        modelDragState.totalMove = 0;
        modelDragState.suppressClick = false;
        if (modelRenderer && modelRenderer.domElement.setPointerCapture) {
            modelRenderer.domElement.setPointerCapture(event.pointerId);
        }
    }

    function onModelPointerMove(event) {
        if (!modelDragState.active || modelDragState.pointerId !== event.pointerId) return;
        var deltaX = event.clientX - modelDragState.lastX;
        var deltaY = event.clientY - modelDragState.lastY;
        modelDragState.lastX = event.clientX;
        modelDragState.lastY = event.clientY;
        modelDragState.totalMove += Math.abs(deltaX) + Math.abs(deltaY);
        if (modelDragState.totalMove > 4) {
            modelDragState.suppressClick = true;
        }
        rotateInteractiveModels(deltaX);
        tiltInteractiveModels(deltaY);
    }

    function onModelPointerEnd(event) {
        if (modelDragState.pointerId !== null && modelDragState.pointerId !== event.pointerId) return;
        modelDragState.active = false;
        modelDragState.pointerId = null;
        if (modelRenderer && modelRenderer.domElement.releasePointerCapture) {
            try {
                modelRenderer.domElement.releasePointerCapture(event.pointerId);
            } catch (e) {}
        }
    }

    function onModelWheel(event) {
        event.preventDefault();
        var scaleFactor = event.deltaY < 0 ? 1.08 : 0.92;
        scaleInteractiveModels(scaleFactor);
    }

    function bindModelPointerControls(renderer) {
        renderer.domElement.addEventListener('pointerdown', onModelPointerDown);
        renderer.domElement.addEventListener('pointermove', onModelPointerMove);
        renderer.domElement.addEventListener('pointerup', onModelPointerEnd);
        renderer.domElement.addEventListener('pointercancel', onModelPointerEnd);
        renderer.domElement.addEventListener('pointerleave', onModelPointerEnd);
        renderer.domElement.addEventListener('wheel', onModelWheel, { passive: false });
    }

    function unbindModelPointerControls(renderer) {
        if (!renderer || !renderer.domElement) return;
        renderer.domElement.removeEventListener('pointerdown', onModelPointerDown);
        renderer.domElement.removeEventListener('pointermove', onModelPointerMove);
        renderer.domElement.removeEventListener('pointerup', onModelPointerEnd);
        renderer.domElement.removeEventListener('pointercancel', onModelPointerEnd);
        renderer.domElement.removeEventListener('pointerleave', onModelPointerEnd);
        renderer.domElement.removeEventListener('wheel', onModelWheel);
    }

    function onGalleryModelClick(event) {
        if (modelDragState.suppressClick) {
            modelDragState.suppressClick = false;
            return;
        }
        focusGalleryModelAtClientPoint(event.clientX, event.clientY);
    }

    function focusGalleryModelAtClientPoint(clientX, clientY) {
        if (!modelRenderer || !modelCamera || !modelRaycaster || !modelPointer) return;
        var rect = modelRenderer.domElement.getBoundingClientRect();
        if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) {
            return false;
        }
        modelPointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        modelPointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
        modelRaycaster.setFromCamera(modelPointer, modelCamera);
        var roots = galleryModels.map(function(entry) { return entry.group; });
        var hits = modelRaycaster.intersectObjects(roots, true);
        if (!hits.length) return false;
        var hitRoot = null;
        for (var i = 0; i < hits.length; i++) {
            var obj = hits[i].object;
            while (obj && obj.parent) {
                if (roots.indexOf(obj) !== -1) {
                    hitRoot = obj;
                    break;
                }
                obj = obj.parent;
            }
            if (hitRoot) break;
        }
        if (!hitRoot) return false;
        for (var j = 0; j < galleryModels.length; j++) {
            if (galleryModels[j].group === hitRoot) {
                focusGalleryModel(galleryModels[j]);
                return true;
            }
        }
        return false;
    }

    function loadKilnModelSet(THREE, GLTFLoader, scene, renderer, camera, files, kilnName) {
        var loader = new GLTFLoader();
        var loadedCount = 0;

        files.forEach(function(path, index) {
            loader.load(
                path,
                function(gltf) {
                    var group = new THREE.Group();
                    var model = gltf.scene;
                    normalizeModel(model, 1.0);
                    group.add(model);
                    setModelOpacity(group, 1);
                    group.userData.modelIndex = index;
                    group.userData.path = path;

                    var entry = {
                        group: group,
                        path: path,
                        basePosition: new THREE.Vector3(),
                        baseScale: new THREE.Vector3(1, 1, 1),
                        targetPosition: new THREE.Vector3(),
                        targetScale: new THREE.Vector3(1, 1, 1),
                        opacity: 1,
                        targetOpacity: 1
                    };
                    galleryModels[index] = entry;
                    scene.add(group);
                    loadedCount++;
                    if (loadedCount === files.length) {
                        galleryModels = galleryModels.filter(Boolean);
                        setGalleryLayout();
                    }
                },
                undefined,
                function(error) {
                    console.warn(kilnName + '模型加载失败:', path, error);
                    loadedCount++;
                    if (loadedCount === files.length && galleryModels.length === 0) {
                        createProceduralModel(THREE, scene, renderer, camera);
                    } else if (loadedCount === files.length) {
                        galleryModels = galleryModels.filter(Boolean);
                        setGalleryLayout();
                    }
                }
            );
        });

        renderer.domElement.addEventListener('click', onGalleryModelClick);
        bindModelPointerControls(renderer);

        function animate() {
            if (!introModel || !introModel.contains(renderer.domElement)) return;
            modelAnimationId = requestAnimationFrame(animate);
            updateGalleryModelTransitions();
            renderer.render(scene, camera);
        }
        animate();
    }

    function initKilnModelGallery(index) {
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

            var camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
            camera.position.set(0, 0.2, 6.4);
            camera.lookAt(0, 0, 0);
            modelCamera = camera;

            var renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.shadowMap.enabled = true;
            introModel.appendChild(renderer.domElement);
            modelRenderer = renderer;
            initGestureControls();
            modelRaycaster = new THREE.Raycaster();
            modelPointer = new THREE.Vector2();
            introModel.classList.add('ruyao-gallery');

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

            var files = getKilnModelFiles(index);
            if (GLTFLoader && files.length) {
                loadKilnModelSet(THREE, GLTFLoader, modelScene, renderer, camera, files, KILN_DATA[index].name);
            } else {
                // 无 GLTFLoader，直接用程序化生成
                createProceduralModel(THREE, modelScene, renderer, camera);
            }

            modelResizeHandler = function() {
                if (!introModel || !modelRenderer || !modelCamera) return;
                var w = introModel.clientWidth || 480;
                var h = introModel.clientHeight || 480;
                modelCamera.aspect = w / h;
                modelCamera.updateProjectionMatrix();
                modelRenderer.setSize(w, h);
            };
            window.addEventListener('resize', modelResizeHandler);
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

        var modelGroup = new THREE.Group();
        var model = new THREE.Mesh(geometry, material);
        model.position.y = -1.3;
        modelGroup.add(model);

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
        modelGroup.add(crackMesh);
        scene.add(modelGroup);

        var proceduralEntry = {
            group: modelGroup,
            basePosition: modelGroup.position.clone(),
            baseScale: modelGroup.scale.clone(),
            targetPosition: modelGroup.position.clone(),
            targetScale: modelGroup.scale.clone(),
            opacity: 1,
            targetOpacity: 1
        };
        galleryModels = [proceduralEntry];
        bindModelPointerControls(renderer);

        function animate() {
            if (!introModel || !introModel.contains(renderer.domElement)) return;
            modelAnimationId = requestAnimationFrame(animate);
            updateGalleryModelTransitions();
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
        if (modelRenderer && modelRenderer.domElement) {
            modelRenderer.domElement.removeEventListener('click', onGalleryModelClick);
        }
        destroyGestureControls();
        unbindModelPointerControls(modelRenderer);
        if (modelRenderer) {
            modelRenderer.dispose();
            modelRenderer = null;
        }
        if (modelResizeHandler) {
            window.removeEventListener('resize', modelResizeHandler);
            modelResizeHandler = null;
        }
        if (introModel) {
            introModel.classList.remove('ruyao-gallery');
            introModel.innerHTML = '';
        }
        modelScene = null;
        modelCamera = null;
        modelRaycaster = null;
        modelPointer = null;
        galleryModels = [];
        selectedGalleryModel = null;
        currentIntroData = null;
        currentIntroIndex = -1;
        if (artifactInfoTimer) {
            clearTimeout(artifactInfoTimer);
            artifactInfoTimer = null;
        }

        introPanel.classList.remove('has-model');
        introPanel.style.removeProperty('--kiln-bg-image');

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

    var mainContent = document.getElementById('main-content');
    var restoreHomeDefaultView = function() {
        hideHomeKilnIntro();
        hideHomeHoverModel();
    };
    if (mainContent) {
        var homeBgCarousel = document.getElementById('home-bg-carousel');
        var homeBgReveal = document.getElementById('home-bg-reveal');
        var homeBgCarouselImages = [
            'images background/陶瓷谱图册.十四开.纸本设色（28.8x30.7厘米）台北故宫博物院藏_02(1).png',
            'images background/陶瓷谱图册.十四开.纸本设色（28.8x30.7厘米）台北故宫博物院藏_03(1).png',
            'images background/陶瓷谱图册.十四开.纸本设色（28.8x30.7厘米）台北故宫博物院藏_04(1).png',
            'images background/陶瓷谱图册.十四开.纸本设色（28.8x30.7厘米）台北故宫博物院藏_05(1).png',
            'images background/陶瓷谱图册.十四开.纸本设色（28.8x30.7厘米）台北故宫博物院藏_06(1).png'
        ];
        var homeBgCarouselIndex = 0;
        var homeBgCarouselTimer = null;
        var homeBgActiveSlide = 0;
        var homeBgSlides = homeBgCarousel ? homeBgCarousel.querySelectorAll('.home-bg-slide') : [];
        var kilnRevealImages = [
            'images/汝窑 新.jpg',
            'images/官窑 新.jpg',
            'images/哥窑 新.jpg',
            'images/钧窑 新.jpg',
            'images/定窑.png'
        ];

        function setHomeBgCarouselImage(index) {
            if (!homeBgSlides.length || !homeBgCarouselImages.length) return;
            if (!homeBgSlides[0].style.backgroundImage && !homeBgSlides[1].style.backgroundImage) {
                homeBgSlides[0].style.backgroundImage = 'url("' + homeBgCarouselImages[index] + '")';
                homeBgSlides[0].classList.add('active');
                homeBgActiveSlide = 0;
                return;
            }
            var currentSlide = homeBgActiveSlide;
            var nextSlide = currentSlide === 0 ? 1 : 0;
            homeBgSlides[nextSlide].style.backgroundImage = 'url("' + homeBgCarouselImages[index] + '")';
            homeBgSlides[nextSlide].classList.remove('active');
            void homeBgSlides[nextSlide].offsetWidth;
            requestAnimationFrame(function() {
                homeBgSlides[nextSlide].classList.add('active');
                homeBgSlides[currentSlide].classList.remove('active');
                homeBgActiveSlide = nextSlide;
            });
        }

        function startHomeBgCarousel() {
            if (!homeBgCarousel || !homeBgCarouselImages.length) return;
            homeBgCarousel.classList.remove('paused');
            if (homeBgCarouselTimer) return;
            setHomeBgCarouselImage(homeBgCarouselIndex);
            homeBgCarouselTimer = setInterval(function() {
                homeBgCarouselIndex = (homeBgCarouselIndex + 1) % homeBgCarouselImages.length;
                setHomeBgCarouselImage(homeBgCarouselIndex);
            }, 5000);
        }

        function pauseHomeBgCarousel() {
            if (homeBgCarousel) {
                homeBgCarousel.classList.add('paused');
            }
        }

        function showHomeBgReveal(nameEl, index) {
            if (!homeBgReveal || !kilnRevealImages[index]) return;
            pauseHomeBgCarousel();
            var rect = nameEl.getBoundingClientRect();
            var mainRect = mainContent.getBoundingClientRect();
            var x = rect.left + rect.width / 2 - mainRect.left;
            var y = rect.top + rect.height / 2 - mainRect.top;
            homeBgReveal.style.setProperty('--reveal-x', x + 'px');
            homeBgReveal.style.setProperty('--reveal-y', y + 'px');
            var imagePath = kilnRevealImages[index];
            var activeLayer = homeBgReveal.querySelector('.home-bg-reveal-layer.active');
            if (!activeLayer || activeLayer.getAttribute('data-bg-src') !== imagePath) {
                var nextLayer = document.createElement('div');
                nextLayer.className = 'home-bg-reveal-layer';
                nextLayer.setAttribute('data-bg-src', imagePath);
                nextLayer.style.backgroundImage = 'url("' + imagePath + '")';
                homeBgReveal.appendChild(nextLayer);
                requestAnimationFrame(function() {
                    nextLayer.classList.add('active');
                    if (activeLayer) {
                        activeLayer.classList.remove('active');
                    }
                });
                if (activeLayer) {
                    setTimeout(function() {
                        if (activeLayer.parentNode) {
                            activeLayer.parentNode.removeChild(activeLayer);
                        }
                    }, 950);
                }
            }
            homeBgReveal.classList.add('active');
        }

        function hideHomeBgReveal() {
            if (!homeBgReveal) return;
            homeBgReveal.classList.remove('active');
            startHomeBgCarousel();
        }

        function moveHomePuppetsOut() {
            if (!mainContent) return;
            mainContent.classList.remove('home-puppets-return');
            mainContent.classList.add('home-puppets-exit');
        }

        function moveHomePuppetsBack() {
            if (!mainContent) return;
            mainContent.classList.remove('home-puppets-exit');
            mainContent.classList.add('home-puppets-return');
        }

        function resetHomePuppetMotion() {
            if (!mainContent) return;
            mainContent.classList.remove('home-puppets-exit', 'home-puppets-return');
        }

        restoreHomeDefaultView = function() {
            hideHomeKilnIntro();
            hideHomeHoverModel();
            hideHomeBgReveal();
            resetHomePuppetMotion();
        };

        startHomeBgCarousel();

        function handleHomeKilnHover(node) {
            if (!node || !mainContent.contains(node)) return;
            var nameEl = node.querySelector('.kiln-name') || node;
            var idx = parseInt(node.getAttribute('data-index'), 10);
            if (isNaN(idx)) return;
            moveHomePuppetsOut();
            showHomeKilnIntro(idx);
            if (homeHoverVideoPaths[idx]) {
                hideHomeBgReveal();
                showHomeHoverModel(idx);
            } else {
                hideHomeHoverModel();
                showHomeBgReveal(nameEl, idx);
            }
        }

        var homeKilnNodes = mainContent.querySelectorAll('.kiln-node');
        Array.prototype.forEach.call(homeKilnNodes, function(node) {
            node.addEventListener('mouseenter', function() {
                handleHomeKilnHover(node);
            });
        });

        mainContent.addEventListener('click', function(e) {
            var node = e.target.closest ? e.target.closest('.kiln-node') : null;
            if (!node || !mainContent.contains(node)) return;
            var idx = parseInt(node.getAttribute('data-index'), 10);
            if (isNaN(idx)) return;
            e.stopPropagation();
            hideHomeKilnIntro();
            hideHomeHoverModel();
            showPoem(idx);
        });

        mainContent.addEventListener('mouseover', function(e) {
            var node = e.target.closest ? e.target.closest('.kiln-node') : null;
            if (!node || !mainContent.contains(node)) return;
            var related = e.relatedTarget;
            if (related && node.contains(related)) return;
            handleHomeKilnHover(node);
        });

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
        centerChar.addEventListener('mouseenter', function() {
            if (isShowing || !mainContent) return;
            if (typeof restoreHomeDefaultView === 'function') {
                restoreHomeDefaultView();
            }
            moveHomePuppetsBack();
            mainContent.classList.add('maker-word-hover');
            mainContent.classList.remove('maker-word-exit');
        });
        centerChar.addEventListener('mouseleave', function() {
            if (isShowing || !mainContent) return;
            mainContent.classList.remove('maker-word-hover', 'maker-word-exit');
        });
        centerChar.addEventListener('click', function() {
            if (isShowing) return;
            if (mainContent) {
                mainContent.classList.add('maker-word-hover', 'maker-word-exit');
            }
            setTimeout(function() {
                showMakerPoem();
            }, 760);
        });
    }

    // ===== 启动 =====
    renderPentagon();
    setTimeout(showNodes, 50);

})();


