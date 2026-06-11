(function() {
'use strict';

var STEP_DATA = [
{
title: '采石选料',
desc: '开采并初选瓷石原料，是决定胎质白度、致密度和烧成稳定性的源头工序。',
question: '请选择瓷石原料与采选处理方式：',
options: [
{text:'风化适中矿层 + 粗碎 + 除铁杂',correct:true,effect:10,knowledge:'采石应先选择风化程度适中的矿层，开采后粗碎，并剔除铁质、菱铁矿等明显杂质。这样能减少胎体黑点、砂眼和烧成后的色差。',warning:''},
{text:'高岭土长石石英 + 筛拣 + 风化3-6个月',correct:true,effect:10,knowledge:'高岭土、长石、石英是常见瓷胎原料组合。粗碎筛拣后露天自然风化3-6个月，可促使矿物分解，改善后续练泥的细腻度和可塑性。',warning:''},
{text:'人工采挖 + 分层堆放 + 自然风化',correct:true,effect:9,knowledge:'人工采挖便于按矿层品质分拣，分层堆放能避免优劣原料混杂。自然风化后的瓷石更易粉碎和淘洗。',warning:''},
{text:'机械开采 + 粗碎筛分 + 去除菱铁矿',correct:true,effect:9,knowledge:'机械开采效率高，但更需要后续筛分和除杂。特别是含铁矿物会直接影响瓷胎洁净度，必须在采石阶段尽早剔除。',warning:''},
{text:'风化不足矿石 + 直接粉碎',correct:false,effect:4,knowledge:'',warning:'风化不足的矿石颗粒硬、分解不充分，后续练泥难以均化，拉坯时也容易出现颗粒划痕和局部开裂。'},
{text:'混入铁质杂石 + 不筛拣',correct:false,effect:2,knowledge:'',warning:'铁质杂石会在烧成后形成黑点、斑块甚至熔蚀缺陷。采石阶段不筛拣，会让后续练泥、上釉和窑烧都难以补救。'}
]
},
{
title: '练泥陈腐',
desc: '将瓷石粉与水混合，经沉淀、压滤、揉踩、真空练泥和陈腐，使泥料均匀可塑。',
question: '请选择练泥与陈腐工艺：',
options: [
{text:'加水搅拌 + 沉淀 + 压滤成泥饼',correct:true,effect:10,knowledge:'瓷石粉加水搅拌后沉淀，再压滤成泥饼，是练泥前半段的关键。它能稳定泥料含水率，并去除一部分粗颗粒杂质。',warning:''},
{text:'手工踩泥 + 排出气泡 + 陈腐2周',correct:true,effect:9,knowledge:'踩泥能反复压合泥料并排出气泡。陈腐2周后，泥料中的水分和颗粒结合更均匀，可塑性明显提升。',warning:''},
{text:'真空练泥 + 均化泥料 + 陈腐4周',correct:true,effect:10,knowledge:'真空练泥机能进一步排气和均化，适合要求稳定的瓷坯。陈腐4周可增强泥料粘结性，但要保持清洁和适当湿度。',warning:''},
{text:'压滤泥饼 + 反复揉搓 + 醒泥备用',correct:true,effect:9,knowledge:'压滤后的泥饼还需要揉搓、折叠和醒泥，使泥料内外水分一致。这样拉坯时泥团更听手，不易偏心。',warning:''},
{text:'只加水搅拌 + 不沉淀压滤',correct:false,effect:3,knowledge:'',warning:'只加水搅拌无法控制含水率，也不能有效去除粗颗粒。泥料过软或夹杂硬粒，都会影响拉坯和修坯质量。'},
{text:'不踩泥不排气 + 直接拉坯',correct:false,effect:2,knowledge:'',warning:'练泥必须排出气泡。不排气的泥团在拉坯时易开裂，高温窑烧时内部空气膨胀，还可能造成炸坯。'}
]
},
{
title: '拉坯成型',
desc: '将泥团置于旋转转轮中心，通过定中心、开孔、提泥、扩宽塑出器物基本形态。',
question: '请选择拉坯方式与器型：',
options: [
{text:'定中心开孔提泥 + 茶杯',correct:true,effect:10,knowledge:'茶杯适合完整练习拉坯基本动作：泥团先正对转轮中心，再开孔、提泥、修口，最后割底取下。',warning:''},
{text:'定中心扩宽成型 + 碗',correct:true,effect:10,knowledge:'碗形需要在提泥后逐步扩宽，保持口沿圆正和腹壁均匀。补水要适量，过干会拉裂，过湿会软塌。',warning:''},
{text:'多次提泥收口 + 花瓶',correct:true,effect:9,knowledge:'花瓶需要先拉高再收口，重心控制更难。每次提泥都要保持手势稳定，避免器壁上薄下厚或瓶身偏斜。',warning:''},
{text:'开孔提泥留厚底 + 瓷罐',correct:true,effect:9,knowledge:'瓷罐要保留适当底厚，便于后续修足。拉坯时需兼顾腹部容量、肩线和口径比例。',warning:''},
{text:'补水控湿拉宽 + 茶盘',correct:true,effect:8,knowledge:'茶盘偏扁平，拉宽时尤其要控制泥料湿度和平整度。成型后割底取下，避免盘面被拉变形。',warning:''},
{text:'不定中心 + 直接开孔',correct:false,effect:3,knowledge:'',warning:'未定中心就开孔会让器物从一开始偏心，后续提泥和扩宽都会失控，器壁厚薄不均，烧后容易歪斜。'},
{text:'不补水干拉 + 花瓶',correct:false,effect:3,knowledge:'',warning:'拉坯要保持泥料湿度。不补水干拉会产生拉裂和暗裂，尤其花瓶这类高坯更容易在提泥时断裂或塌坯。'}
]
},
{
title: '修坯挖足',
desc: '坯体达到皮革硬度时固定在转盘上，用刀具修整外形、挖足并修薄器壁。',
question: '请选择修坯时机与修整方式：',
options: [
{text:'皮革硬度 + 固定转盘 + 先修底足',correct:true,effect:10,knowledge:'修坯应等坯体达到皮革硬度，再固定在转盘上。先修底足能建立稳定基准，后续修器身才不易偏斜。',warning:''},
{text:'先修底足 + 再修器身 + 逐段修薄',correct:true,effect:10,knowledge:'从下往上逐段修薄能控制器壁均匀，避免局部厚重造成干燥和烧成收缩不一致。',warning:''},
{text:'挖足修圈 + 控制同心圆',correct:true,effect:9,knowledge:'圈足既影响摆放稳定，也影响成品观感。挖足时要控制同心圆和深浅，避免足墙一侧过薄。',warning:''},
{text:'平底修整 + 口沿找圆',correct:true,effect:9,knowledge:'平底器要修平接触面，口沿也需找圆修顺。这样上釉、装匣和最终摆放都更稳定。',warning:''},
{text:'湿坯未到皮革硬度 + 强行修坯',correct:false,effect:3,knowledge:'',warning:'湿坯太软，修坯时容易粘刀、塌边或变形。必须等到半干、近似皮革硬度后再上转盘修整。'},
{text:'只追求薄胎 + 过度挖足',correct:false,effect:2,knowledge:'',warning:'修坯不是越薄越好。过度挖足和修薄会降低坯体强度，搬运、上釉、装匣和窑烧时都更容易破损。'}
]
},
{
title: '绘画装饰',
desc: '在素坯或干坯上以青花料、釉下彩等进行勾线、分水、渲染，并自然阴干。',
question: '请选择绘画工艺与纹饰素材：',
options: [
{text:'青花料勾线 + 分水渲染 + 缠枝莲',correct:true,effect:10,knowledge:'青花绘画常以毛笔蘸料勾线，再用分水表现浓淡层次。缠枝莲纹连续回环，适合体现传统瓷器装饰秩序。',warning:''},
{text:'先淡后浓 + 控水描绘 + 山水',correct:true,effect:10,knowledge:'绘画应先画淡色，再叠加浓色。山水纹尤其需要控制笔上水分，避免墨色晕散破坏层次。',warning:''},
{text:'毛笔分水 + 自然阴干 + 花鸟',correct:true,effect:9,knowledge:'花鸟纹需要线条和渲染配合。绘后自然阴干，能让色料稳定附着，为后续上釉做准备。',warning:''},
{text:'釉下彩勾线 + 分层设色 + 几何纹',correct:true,effect:9,knowledge:'釉下彩需考虑高温呈色稳定性。分层设色和清晰勾线能减少烧后画面模糊，几何纹也更便于观察线条质量。',warning:''},
{text:'浓淡颠倒 + 水分过多',correct:false,effect:4,knowledge:'',warning:'先浓后淡或笔上水分过多，都会让色料晕散、边界模糊。釉下装饰烧成后难以再修正。'},
{text:'绘后暴晒 + 未干即上釉',correct:false,effect:2,knowledge:'',warning:'绘后应自然阴干。暴晒会导致坯面和色料层收缩不均，未干即上釉则容易冲花、脱粉或产生釉面缺陷。'}
]
},
{
title: '上釉施釉',
desc: '在坯体表面覆盖玻璃质釉浆，烧成后形成光滑釉面，并保护胎体。',
question: '请分别选择釉色与上釉方式：',
choiceGroups: [
{key:'glaze', label:'釉色', options:[
{text:'青釉',correct:true,effect:10,knowledge:'青釉以铁为主要呈色因素，在还原气氛中可呈青绿、粉青或天青等色调，适合温润含蓄的青瓷效果。',warning:''},
{text:'白釉',correct:true,effect:10,knowledge:'白釉依赖较低含铁量和稳定烧成，能突出器形线条与绘画装饰，是白瓷和青花瓷常见釉色。',warning:''},
{text:'天青釉',correct:true,effect:10,knowledge:'天青釉属青釉系统，讲究乳浊、柔和和含蓄的色感，对釉层厚度、窑温和还原气氛都有较高要求。',warning:''},
{text:'粉青釉',correct:true,effect:9,knowledge:'粉青釉色调浅柔，适合碗、瓶、洗等器形。釉层过薄会发干，过厚则可能流釉，需要控制施釉时间。',warning:''},
{text:'霁蓝釉',correct:true,effect:9,knowledge:'霁蓝釉色泽深沉，适合陈设器。钴蓝高温釉对釉浆均匀度和烧成温度敏感，施釉需避免厚薄不一。',warning:''},
{text:'郎窑红釉',correct:true,effect:8,knowledge:'郎窑红属于高温铜红釉，呈色难度高，对窑温、气氛和冷却都有严格要求，适合作为高挑战釉色。',warning:''},
{text:'釉浆过稀',correct:false,effect:4,knowledge:'',warning:'釉浆过稀会导致挂釉不足，烧后釉面干涩、露胎或颜色不饱满。通常需根据器物和釉种控制比重。'},
{text:'底部不擦釉',correct:false,effect:3,knowledge:'',warning:'上釉后必须擦除底部釉层或足底接触面，否则高温熔融后会粘在匣钵或棚板上，损坏器物。'}
]},
{key:'method', label:'上釉方式', options:[
{text:'浸釉 + 垂直匀速入缸',correct:true,effect:10,knowledge:'浸釉要让器物匀速垂直进入釉缸，再平稳提出。停留时间和提拉速度会影响釉层厚薄。',warning:''},
{text:'荡釉 + 内壁摇匀倒出',correct:true,effect:10,knowledge:'荡釉适合壶、瓶、罐等内部施釉。釉浆倒入后摇荡，使内壁挂釉均匀，再倒出余釉。',warning:''},
{text:'喷釉 + 大件异形器',correct:true,effect:9,knowledge:'喷釉适合大件或异形器物，能覆盖复杂曲面。操作时需控制喷距、转台速度和防护条件。',warning:''},
{text:'控制比重1.45-1.55 + 擦除底釉',correct:true,effect:10,knowledge:'釉浆比重通常控制在1.45-1.55 g/cm³，并在上釉后擦除底部釉层，可防止烧成时粘匣或粘棚板。',warning:''},
{text:'浇釉 + 外壁均匀流釉',correct:true,effect:9,knowledge:'浇釉适合大件或不便浸釉的器物。关键是转动器身并控制流速，避免局部积釉。',warning:''},
{text:'釉浆不测比重 + 随意泼釉',correct:false,effect:3,knowledge:'',warning:'釉浆浓稀不明会导致釉层厚薄失控。随意泼釉容易产生流釉、缩釉、露胎和针孔。'},
{text:'底足不擦釉 + 厚釉堆底',correct:false,effect:2,knowledge:'',warning:'底足不擦釉会在高温熔融后粘住匣钵或棚板；底部积釉过厚还会破坏足部线条。'}
]}
]
},
{
title: '装匣入窑',
desc: '将上釉后的坯体装入匣钵，避免落渣、火焰直接冲击，并保证窑内堆叠稳定。',
question: '请选择装匣与入窑方式：',
options: [
{text:'匣钵垫氧化铝粉 + 每匣一器',correct:true,effect:10,knowledge:'匣钵底部垫氧化铝粉、糠灰或垫饼，可减少粘连。重要器物每匣一器，能降低落渣和碰粘风险。',warning:''},
{text:'数小器同匣 + 留足间隙',correct:true,effect:9,knowledge:'小件器物可以同匣装烧，但必须留足间隙，避免釉面熔融后互相粘连，也要保证热流通过。',warning:''},
{text:'检查匣钵裂纹 + 垫饼隔开',correct:true,effect:10,knowledge:'入窑前检查匣钵是否破损、开裂，并用垫饼隔开器物，可避免塌匣、落渣和粘连。',warning:''},
{text:'匣钵柱垂直稳定 + 火道通畅',correct:true,effect:9,knowledge:'堆叠匣钵柱时要保持垂直稳定，并留出火道。这样窑内升温和气氛分布更均匀。',warning:''},
{text:'破裂匣钵 + 继续堆叠',correct:false,effect:3,knowledge:'',warning:'破裂匣钵在升温中可能掉渣、开裂或坍塌，直接污染釉面，甚至压坏整匣器物。'},
{text:'多器紧贴 + 不留火道',correct:false,effect:2,knowledge:'',warning:'器物紧贴会导致粘连，不留火道会造成局部欠烧或过烧。装匣既要保护器物，也要保证窑内热流。'}
]
},
{
title: '窑烧成瓷',
desc: '在窑炉中分阶段升温、转换气氛、保温和缓冷，使瓷坯玻化、釉面成熟。',
question: '请选择窑烧制度与烧成气氛：',
options: [
{text:'室温-950℃氧化焰 + 1250-1300℃保温',correct:true,effect:10,knowledge:'低温阶段用氧化焰排出结晶水，高温阶段升至1250-1300℃并保温，可使胎体瓷化、釉面成熟。',warning:''},
{text:'950℃后转还原焰 + 1300℃烧青花',correct:true,effect:10,knowledge:'以还原焰烧青花瓷时，常在950℃以后转入还原气氛，中高温阶段促使釉面和青花发色稳定。',warning:''},
{text:'1200-1350℃成熟区间 + 缓冷至600℃以下',correct:true,effect:10,knowledge:'常见瓷器烧成温度约1200-1350℃，具体取决于胎釉配方。烧后需缓慢冷却，降至600℃以下再开窑。',warning:''},
{text:'1250℃还原焰 + 控制保温时间',correct:true,effect:9,knowledge:'1250℃还原烧成适合部分青瓷或釉下彩器物，但需要根据胎釉成熟度控制保温时间，防止欠烧或过烧。',warning:''},
{text:'1100℃结束 + 立即开窑',correct:false,effect:2,knowledge:'',warning:'1100℃通常不足以让瓷胎玻化、釉面成熟；立即开窑还会产生热震，造成炸裂或惊釉。'},
{text:'全程不分氧化还原 + 不保温',correct:false,effect:3,knowledge:'',warning:'窑烧必须分阶段控制温度和气氛。全程不控氧化还原、不保温，会造成发色失败、釉面不熟或胎体不致密。'},
{text:'高温段快速升降 + 600℃以上开窑',correct:false,effect:2,knowledge:'',warning:'高温段快速升降会带来应力，600℃以上开窑温差过大，容易导致器物开裂、变形或釉面受损。'}
]
}
];

var currentStep = 0;
var selections = [];
var state = {};
var stoneWashTransitionTimer = null;
var BLUE_LOTUS_TEXTURE = '图案纹样/jimeng-2026-05-21-8289-手绘青花缠枝莲图案纹样，透明背景，纹样丰富饱满，高清画质，传统中式纹样，线条流畅....png';
var BLUE_LOTUS_TEXTURE_FEATURE_ENABLED = false;
var blueLotusTextureEnabled = true;
var feedbackTypeTimer = null;
var GESTURE_PROFILE_LEVELS = 40;
var GESTURE_LATHE_SEGMENTS = 256;
var patternPlacement = {
angle: 0,
y: 0,
scale: 1
};
var gestureGlazeStrokes = [];
var final3D = {
renderer: null,
scene: null,
camera: null,
model: null,
animationId: null,
resizeHandler: null,
isDragging: false,
lastX: 0,
lastY: 0
};
var preview3D = {
renderer: null,
scene: null,
camera: null,
model: null,
animationId: null,
resizeHandler: null,
isDragging: false,
lastX: 0,
lastY: 0
};
var gestureThrowing = {
active: false,
phase: 0,
renderer: null,
scene: null,
camera: null,
body: null,
wheel: null,
targetOutline: null,
handlePreview: null,
animationId: null,
resizeHandler: null,
video: null,
skeletonCanvas: null,
skeletonCtx: null,
hands: null,
stream: null,
frameId: null,
processingFrame: false,
profile: null,
phaseOneBaseProfile: null,
phaseTwoBaseProfile: null,
handlePath: null,
handleDrawing: false,
handleProgress: 0,
lastHandleGestureY: null,
lastHandleGesturePoint: null,
handleGuideIndex: 0,
selectedShape: '',
handsLoadingPromise: null,
lastFinger: null,
handConnections: [
[0, 1], [1, 2], [2, 3], [3, 4],
[0, 5], [5, 6], [6, 7], [7, 8],
[0, 9], [9, 10], [10, 11], [11, 12],
[0, 13], [13, 14], [14, 15], [15, 16],
[0, 17], [17, 18], [18, 19], [19, 20],
[5, 9], [9, 13], [13, 17], [17, 5]
]
};
var gestureGlazing = {
active: false,
renderer: null,
scene: null,
camera: null,
model: null,
animationId: null,
resizeHandler: null,
hands: null,
video: null,
skeletonCanvas: null,
skeletonCtx: null,
stream: null,
frameId: null,
processingFrame: false,
lastStrokeAt: 0,
statusEl: null,
shape: '茶杯',
glaze: '白釉',
lastTouchedBand: -1
};

function updateMakerBackground(stepIndex) {
var maker = document.getElementById('porcelain-maker');
if (!maker) return;
var maxIndex = Math.max(1, STEP_DATA.length - 1);
var clamped = Math.max(0, Math.min(stepIndex, maxIndex));
var percent = clamped * 100 / maxIndex;
maker.style.setProperty('--maker-bg-x', percent + '%');
}

function initMaker() {
cleanupGestureThrowing();
cleanupGestureGlazing();
cleanupPreview3D();
cleanupFinal3D();
clearStoneWashTransition();
currentStep = 0;
selections = new Array(STEP_DATA.length).fill(null);
state = {};
blueLotusTextureEnabled = true;
patternPlacement = { angle: 0, y: 0, scale: 1 };
gestureGlazeStrokes = [];
document.getElementById('maker-final').classList.remove('show');
document.getElementById('maker-step-container').classList.add('show');
updateMakerBackground(0);
renderStep(0);
renderProgress();
}

function renderStep(index) {
updateMakerBackground(index);
cleanupGestureThrowing();
cleanupGestureGlazing();
cleanupPreview3D();
if (feedbackTypeTimer) {
clearTimeout(feedbackTypeTimer);
feedbackTypeTimer = null;
}
var container = document.getElementById('maker-step-container');
var step = STEP_DATA[index];
var html = '<div class="maker-workbench">';
html += '<div class="maker-preview-panel">';
html += '<div class="book-page-label">预览</div>';
html += '<div id="maker-live-preview" aria-label="制瓷实时3D预览"></div>';
html += '</div>';
html += '<div class="maker-book">';
html += '<div class="maker-book-page maker-book-options">';
html += '<div class="book-page-label">择法</div>';
html += '<div class="' + (step.choiceGroups ? 'maker-options grouped-options' : 'maker-options') + '">';
if (step.choiceGroups) {
for (var g = 0; g < step.choiceGroups.length; g++) {
var group = step.choiceGroups[g];
html += '<div class="maker-option-group">';
html += '<div class="maker-option-group-title">' + group.label + '</div>';
for (var gi = 0; gi < group.options.length; gi++) {
var selected = selections[index] && selections[index][group.key] === gi;
var groupCls = selected ? 'maker-option selected' : 'maker-option';
html += '<div class="' + groupCls + '" data-group="' + group.key + '" data-idx="' + gi + '">' + group.options[gi].text + '</div>';
}
html += '</div>';
}
} else {
for (var i = 0; i < step.options.length; i++) {
var cls = selections[index] === i ? 'maker-option selected' : 'maker-option';
html += '<div class="' + cls + '" data-idx="' + i + '">' + step.options[i].text + '</div>';
}
}
html += '</div>';
html += '</div>';
html += '<div class="maker-book-spine"></div>';
html += '<div class="maker-book-page maker-book-info">';
html += '<div class="book-page-label">工序</div>';
html += '<div class="step-title">' + step.title + '</div>';
html += '<div class="step-desc">' + step.desc + '</div>';
html += '<div class="step-question">' + step.question + '</div>';
if (index === 2) {
html += renderGestureThrowingEntry();
}
if (index === 5) {
html += renderGestureGlazingEntry();
}
html += '<div id="maker-inline-feedback" class="maker-inline-feedback" aria-live="polite"></div>';
html += '</div>';
html += '</div>';
html += '</div>';
html += '<div id="pattern-controls-slot">' + renderPatternControls() + '</div>';
html += '<div class="maker-nav">';
html += '<button id="maker-prev"' + (index === 0 ? ' disabled' : '') + '>上一步</button>';
html += '<button id="maker-next"' + (isStepSelectionComplete(index) ? '' : ' disabled') + '>' + (index === STEP_DATA.length - 1 ? '完成制作' : '下一步') + '</button>';
html += '</div>';
container.innerHTML = html;
var opts = container.querySelectorAll('.maker-option');
for (var j = 0; j < opts.length; j++) {
opts[j].addEventListener('click', onOptionClick);
}
document.getElementById('maker-prev').addEventListener('click', prevStep);
document.getElementById('maker-next').addEventListener('click', nextStep);
var gestureBtn = document.getElementById('gesture-throwing-start');
if (gestureBtn) {
gestureBtn.addEventListener('click', startGestureThrowing);
}
var glazingBtn = document.getElementById('gesture-glazing-start');
if (glazingBtn) {
glazingBtn.addEventListener('click', startGestureGlazing);
}
var glazingClearBtn = document.getElementById('gesture-glazing-clear');
if (glazingClearBtn) {
glazingClearBtn.addEventListener('click', clearGestureGlazingStrokes);
}
bindPatternControls();
try {
initOrUpdatePreview3D();
} catch (error) {
console.warn('制瓷预览初始化失败:', error);
}
}

function renderGestureThrowingEntry() {
var selection = selections[2];
var selected = selection !== null ? STEP_DATA[2].options[selection] : null;
var disabled = !selected || selected.text.indexOf('不定中心 + 直接开孔') !== -1;
var html = '<div class="gesture-throwing-entry">';
html += '<div class="gesture-throwing-entry-title">手势制瓷 / 拉坯</div>';
html += '<div class="gesture-throwing-entry-desc">选择器型后，可进入两步手势制瓷：先从中央按压开坯，再平视坯体按压外壁塑形。</div>';
if (selected && disabled) {
html += '<div class="gesture-throwing-entry-note">当前选择为“直接开孔”，不符合手势制瓷的定中心流程，不能进入该模块。</div>';
}
html += '<button id="gesture-throwing-start" type="button"' + (disabled ? ' disabled' : '') + '>进入手势制瓷</button>';
html += '</div>';
return html;
}

function renderGestureGlazingEntry() {
var selected = selections[5] && typeof selections[5] === 'object';
var disabled = !selected || typeof selections[5].glaze !== 'number';
var html = '<div class="gesture-glazing-entry">';
html += '<div class="gesture-glazing-entry-title">手势上釉</div>';
html += '<div class="gesture-glazing-entry-desc">启动后，让手部骨架触碰瓷器模型；触碰高度的完整横截面会被上釉，上下移动即可逐层覆盖整器。</div>';
if (disabled) {
html += '<div class="gesture-glazing-entry-note">请先选择釉色，再启动手势上釉。</div>';
}
html += '<div class="gesture-glazing-actions">';
html += '<button id="gesture-glazing-start" type="button"' + (disabled ? ' disabled' : '') + '>启动手势上釉</button>';
html += '<button id="gesture-glazing-clear" type="button"' + (gestureGlazeStrokes.length ? '' : ' disabled') + '>清除釉迹</button>';
html += '</div>';
html += '</div>';
return html;
}

function refreshGestureGlazingEntry() {
var oldEntry = document.querySelector('.gesture-glazing-entry');
if (!oldEntry) return;
oldEntry.outerHTML = renderGestureGlazingEntry();
var glazingBtn = document.getElementById('gesture-glazing-start');
if (glazingBtn) {
glazingBtn.addEventListener('click', startGestureGlazing);
}
var glazingClearBtn = document.getElementById('gesture-glazing-clear');
if (glazingClearBtn) {
glazingClearBtn.addEventListener('click', clearGestureGlazingStrokes);
}
}

function renderStoneWashTransition() {
clearStoneWashTransition();
cleanupPreview3D();
if (feedbackTypeTimer) {
clearTimeout(feedbackTypeTimer);
feedbackTypeTimer = null;
}
var container = document.getElementById('maker-step-container');
if (!container) return;
container.classList.add('show', 'showing-maker-transition');
container.innerHTML =
'<div class="stone-wash-transition" aria-label="采石洗料至练泥陈腐过渡动画">' +
'<img class="stone-wash-static-image" src="木偶人物素材/p1/transition-figures.png" alt="采石选料至练泥陈腐过渡图">' +
'</div>';
stoneWashTransitionTimer = setTimeout(function() {
stoneWashTransitionTimer = null;
container.classList.remove('showing-maker-transition');
currentStep = 1;
renderStep(currentStep);
renderProgress();
}, 3000);
}

function renderClayWheelTransition() {
clearStoneWashTransition();
cleanupPreview3D();
if (feedbackTypeTimer) {
clearTimeout(feedbackTypeTimer);
feedbackTypeTimer = null;
}
var container = document.getElementById('maker-step-container');
if (!container) return;
var imageSrc = 'images/clay-wheel-transition-figures.png';
container.classList.add('show', 'showing-maker-transition');
container.innerHTML =
'<div class="clay-wheel-transition" aria-label="练泥陈腐至拉坯成型过渡动画">' +
'<img class="clay-wheel-static-image" src="' + imageSrc + '" alt="练泥陈腐至拉坯成型过渡图">' +
'</div>';
stoneWashTransitionTimer = setTimeout(function() {
stoneWashTransitionTimer = null;
container.classList.remove('showing-maker-transition');
currentStep = 2;
renderStep(currentStep);
renderProgress();
}, 3000);
}

function renderThrowingTrimTransition() {
clearStoneWashTransition();
cleanupPreview3D();
if (feedbackTypeTimer) {
clearTimeout(feedbackTypeTimer);
feedbackTypeTimer = null;
}
var container = document.getElementById('maker-step-container');
if (!container) return;
var imageSrc = '木偶人物素材/p3/陶瓷谱图册.十四开.纸本设色（28.8x30.7厘米）台北故宫博物院藏_05(1).png';
container.classList.add('show', 'showing-maker-transition');
container.innerHTML =
'<div class="clay-wheel-transition" aria-label="拉坯成型至修坯挖足过渡图">' +
'<img class="clay-wheel-static-image" src="' + imageSrc + '" alt="拉坯成型至修坯挖足过渡图">' +
'</div>';
stoneWashTransitionTimer = setTimeout(function() {
stoneWashTransitionTimer = null;
container.classList.remove('showing-maker-transition');
currentStep = 3;
renderStep(currentStep);
renderProgress();
}, 3000);
}

function renderStaticStepTransition(imageSrc, label, targetStep) {
clearStoneWashTransition();
cleanupPreview3D();
if (feedbackTypeTimer) {
clearTimeout(feedbackTypeTimer);
feedbackTypeTimer = null;
}
var container = document.getElementById('maker-step-container');
if (!container) return;
container.classList.add('show', 'showing-maker-transition');
container.innerHTML =
'<div class="clay-wheel-transition" aria-label="' + label + '">' +
'<img class="clay-wheel-static-image" src="' + imageSrc + '" alt="' + label + '">' +
'</div>';
stoneWashTransitionTimer = setTimeout(function() {
stoneWashTransitionTimer = null;
container.classList.remove('showing-maker-transition');
currentStep = targetStep;
renderStep(currentStep);
renderProgress();
}, 3000);
}

function clearStoneWashTransition() {
if (stoneWashTransitionTimer) {
clearTimeout(stoneWashTransitionTimer);
stoneWashTransitionTimer = null;
}
var container = document.getElementById('maker-step-container');
if (container) {
container.classList.remove('showing-maker-transition');
}
}

function isStepSelectionComplete(index) {
var step = STEP_DATA[index];
var sel = selections[index];
if (!step || sel === null) return false;
if (!step.choiceGroups) return sel !== null;
for (var i = 0; i < step.choiceGroups.length; i++) {
var key = step.choiceGroups[i].key;
if (!sel || typeof sel[key] !== 'number') return false;
}
return true;
}

function hasBlueLotusPattern() {
return BLUE_LOTUS_TEXTURE_FEATURE_ENABLED && selections[4] === 0 && blueLotusTextureEnabled;
}

function hasBlueLotusOption() {
return BLUE_LOTUS_TEXTURE_FEATURE_ENABLED && selections[4] === 0;
}

function renderPatternControls() {
if (!hasBlueLotusOption()) return '';
var html = '<div class="pattern-placement-panel">';
html += '<div class="pattern-placement-title">缠枝莲贴图</div>';
html += '<div class="pattern-toggle-row">';
html += '<button type="button" class="pattern-toggle' + (blueLotusTextureEnabled ? ' active' : '') + '" data-pattern-toggle="on">贴图</button>';
html += '<button type="button" class="pattern-toggle' + (!blueLotusTextureEnabled ? ' active' : '') + '" data-pattern-toggle="off">不贴图</button>';
html += '</div>';
if (!blueLotusTextureEnabled) {
html += '<div class="pattern-placement-note">当前保留手绘青花工艺，不在成品上附加缠枝莲贴图。</div>';
html += '</div>';
return html;
}
html += '<label>左右位置<input type="range" data-pattern-control="angle" min="-180" max="180" step="1" value="' + patternPlacement.angle + '"></label>';
html += '<label>上下位置<input type="range" data-pattern-control="y" min="-60" max="60" step="1" value="' + patternPlacement.y + '"></label>';
html += '<label>纹样大小<input type="range" data-pattern-control="scale" min="55" max="150" step="1" value="' + Math.round(patternPlacement.scale * 100) + '"></label>';
html += '</div>';
return html;
}

function bindPatternControls() {
var toggles = document.querySelectorAll('[data-pattern-toggle]');
for (var t = 0; t < toggles.length; t++) {
toggles[t].addEventListener('click', function() {
blueLotusTextureEnabled = this.getAttribute('data-pattern-toggle') === 'on';
refreshPatternControls();
updatePreviewModel();
});
}
var controls = document.querySelectorAll('[data-pattern-control]');
for (var i = 0; i < controls.length; i++) {
controls[i].addEventListener('input', function() {
var key = this.getAttribute('data-pattern-control');
var value = parseFloat(this.value);
if (key === 'scale') {
patternPlacement.scale = value / 100;
} else {
patternPlacement[key] = value;
}
updatePreviewModel();
});
}
}

function refreshPatternControls() {
var slot = document.getElementById('pattern-controls-slot');
if (!slot) return;
slot.innerHTML = renderPatternControls();
bindPatternControls();
}

function onOptionClick() {
var idx = parseInt(this.getAttribute('data-idx'));
var group = this.getAttribute('data-group');
selectOption(currentStep, idx, group);
}

function selectOption(stepIndex, optionIndex, groupKey) {
var step = STEP_DATA[stepIndex];
if (step.choiceGroups) {
selectGroupedOption(stepIndex, optionIndex, groupKey);
return;
}
if (stepIndex === 2 && selections[2] !== optionIndex) {
state.gestureThrowingProfile = null;
}
var opt = step.options[optionIndex];
var isCorrect = opt.correct;
if (stepIndex === 2) {
var prevOpt = selections[0] !== null ? STEP_DATA[0].options[selections[0]] : null;
var clay = prevOpt ? prevOpt.text.split(' + ')[0] : '';
if ((clay === '粗陶土' || clay === '紫砂泥') && opt.text.indexOf('花瓶') !== -1 && opt.text.indexOf('粗陶土') === -1) {
isCorrect = false;
}
}
if (stepIndex === 7) {
var clayOpt = selections[0] !== null ? STEP_DATA[0].options[selections[0]] : null;
var glazeOpt = selections[5] && typeof selections[5] === 'object' ? getGroupedOption(STEP_DATA[5], 'glaze', selections[5].glaze) : (selections[5] !== null ? STEP_DATA[5].options[selections[5]] : null);
var clay = clayOpt ? clayOpt.text.split(' + ')[0] : '';
var glaze = glazeOpt ? glazeOpt.text.split(' + ')[0] : '';
var isQingci = (clay === '青瓷土' || glaze === '青釉' || glaze === '天青釉' || glaze === '粉青釉');
if (isQingci && opt.text.indexOf('还原烧制') === -1) {
isCorrect = false;
}
}
selections[stepIndex] = optionIndex;
var opts = document.querySelectorAll('.maker-option');
for (var i = 0; i < opts.length; i++) {
opts[i].classList.remove('selected');
}
opts[optionIndex].classList.add('selected');
document.getElementById('maker-next').disabled = false;
updatePreviewModel();
renderProgress();
if (stepIndex === 4) {
refreshPatternControls();
}
if (stepIndex === 2) {
renderStep(stepIndex);
var refreshedOpt = document.querySelector('.maker-option[data-idx="' + optionIndex + '"]');
if (refreshedOpt) refreshedOpt.classList.add('selected');
}
if (isCorrect) {
showFeedback(true, opt.knowledge);
} else {
var warning = opt.warning;
if (stepIndex === 2 && !opt.warning) {
warning = '粗陶土颗粒粗、可塑性差，不适合制作精细花瓶。强行拉坯会导致器壁厚薄不均、表面粗糙，烧成后极易变形开裂。';
}
if (stepIndex === 7 && !opt.warning) {
warning = '青瓷必须选择还原烧制！氧化氛围下铁元素无法呈现青绿色，釉色会偏黄褐，完全失去青瓷应有的如玉质感。';
}
showFeedback(false, warning);
}
}

function getGroupedOption(step, groupKey, optionIndex) {
if (!step || !step.choiceGroups) return null;
for (var i = 0; i < step.choiceGroups.length; i++) {
if (step.choiceGroups[i].key === groupKey) {
return step.choiceGroups[i].options[optionIndex] || null;
}
}
return null;
}

function getGroupedSelectionText(stepIndex) {
var step = STEP_DATA[stepIndex];
var sel = selections[stepIndex];
if (!step || !step.choiceGroups || !sel) return '未选择';
var parts = [];
for (var i = 0; i < step.choiceGroups.length; i++) {
var group = step.choiceGroups[i];
var opt = typeof sel[group.key] === 'number' ? group.options[sel[group.key]] : null;
parts.push(group.label + '：' + (opt ? opt.text : '未选择'));
}
return parts.join('；');
}

function selectGroupedOption(stepIndex, optionIndex, groupKey) {
var step = STEP_DATA[stepIndex];
var opt = getGroupedOption(step, groupKey, optionIndex);
if (!step || !step.choiceGroups || !opt) return;
if (!selections[stepIndex] || typeof selections[stepIndex] !== 'object') {
selections[stepIndex] = {};
}
selections[stepIndex][groupKey] = optionIndex;
if (stepIndex === 5 && groupKey === 'glaze') {
gestureGlazeStrokes = [];
}
var groupOptions = document.querySelectorAll('.maker-option[data-group="' + groupKey + '"]');
for (var i = 0; i < groupOptions.length; i++) {
groupOptions[i].classList.remove('selected');
}
var current = document.querySelector('.maker-option[data-group="' + groupKey + '"][data-idx="' + optionIndex + '"]');
if (current) current.classList.add('selected');
var complete = isStepSelectionComplete(stepIndex);
document.getElementById('maker-next').disabled = !complete;
updatePreviewModel();
renderProgress();
if (stepIndex === 5) {
refreshGestureGlazingEntry();
}
var text = opt.knowledge;
if (complete) {
var glazeOpt = getGroupedOption(step, 'glaze', selections[stepIndex].glaze);
var methodOpt = getGroupedOption(step, 'method', selections[stepIndex].method);
text = glazeOpt.knowledge + ' ' + methodOpt.knowledge + ' 当前组合为“' + glazeOpt.text + ' + ' + methodOpt.text + '”。釉色决定烧成后的视觉气质，上釉方式决定釉层厚薄、流动痕迹与均匀程度；实际操作需根据器型大小、是否中空以及装饰需求微调釉浆浓度和施釉时间。';
}
showFeedback(true, text);
}

function showFeedback(isCorrect, text) {
var fb = document.getElementById('maker-feedback');
if (fb) {
fb.classList.remove('show', 'error');
}
var inline = document.getElementById('maker-inline-feedback');
if (!inline) return;
if (feedbackTypeTimer) {
clearTimeout(feedbackTypeTimer);
feedbackTypeTimer = null;
}
inline.className = isCorrect ? 'maker-inline-feedback show' : 'maker-inline-feedback show error';
inline.innerHTML = '<div class="inline-feedback-label">' + (isCorrect ? '工艺提示' : '工艺提醒') + '</div><div class="inline-feedback-text"></div>';
var textEl = inline.querySelector('.inline-feedback-text');
var chars = String(text || '').split('');
var index = 0;
function appendChar() {
if (!textEl) return;
if (index >= chars.length) {
feedbackTypeTimer = null;
return;
}
var span = document.createElement('span');
span.textContent = chars[index];
span.className = 'inline-feedback-char';
textEl.appendChild(span);
index++;
feedbackTypeTimer = setTimeout(appendChar, 34);
}
appendChar();
}

function nextStep() {
if (currentStep === 0) {
renderStoneWashTransition();
return;
}
if (currentStep === 1) {
renderClayWheelTransition();
return;
}
if (currentStep === 2) {
renderThrowingTrimTransition();
return;
}
if (currentStep === 3) {
renderStaticStepTransition(
'木偶人物素材/p4/陶瓷谱图册.十四开.纸本设色（28.8x30.7厘米）台北故宫博物院藏_06(1).png',
'修坯挖足至绘画装饰过渡图',
4
);
return;
}
if (currentStep === 4) {
renderStaticStepTransition(
'木偶人物素材/p5/陶瓷谱图册.十四开.纸本设色（28.8x30.7厘米）台北故宫博物院藏_08(1).png',
'绘画装饰至上釉施釉过渡图',
5
);
return;
}
if (currentStep === 5) {
renderStaticStepTransition(
'木偶人物素材/p6/陶瓷谱图册.十四开.纸本设色（28.8x30.7厘米）台北故宫博物院藏_09(1).png',
'上釉施釉至装匣入窑过渡图',
6
);
return;
}
if (currentStep < STEP_DATA.length - 1) {
currentStep++;
renderStep(currentStep);
renderProgress();
} else {
finishMaking();
}
}

function prevStep() {
if (currentStep > 0) {
currentStep--;
renderStep(currentStep);
renderProgress();
}
}

function renderProgress() {
var steps = document.querySelectorAll('.progress-step');
var progress = document.getElementById('maker-progress');
var selectedCount = 0;
for (var s = 0; s < selections.length; s++) {
if (selections[s] !== null) selectedCount++;
}
var percent = selectedCount / STEP_DATA.length;
if (progress) {
progress.style.setProperty('--maker-progress-percent', Math.round(percent * 100) + '%');
}
for (var i = 0; i < steps.length; i++) {
steps[i].classList.remove('active', 'done');
if (i < currentStep) {
steps[i].classList.add('done');
} else if (i === currentStep) {
steps[i].classList.add('active');
}
}
}

function finishMaking() {
cleanupGestureThrowing();
cleanupGestureGlazing();
cleanupPreview3D();
document.getElementById('maker-step-container').classList.remove('show');
document.getElementById('maker-final').classList.add('show');
updateMakerBackground(STEP_DATA.length - 1);
buildState();
renderFinalResult();
}

function buildState() {
var opt0 = selections[0] !== null ? STEP_DATA[0].options[selections[0]] : null;
state.clay = opt0 ? opt0.text.split(' + ')[0] : '高岭土';
var opt1 = selections[2] !== null ? STEP_DATA[2].options[selections[2]] : null;
var parts1 = opt1 ? opt1.text.split(' + ') : ['手工拉坯', '茶杯'];
state.forming = parts1[0];
state.shape = parts1.length > 2 ? parts1[1] : (parts1.length > 1 ? parts1[1] : '茶杯');
state.shape = state.shape.split(' ')[0];
var opt6 = selections[5] !== null && !STEP_DATA[5].choiceGroups ? STEP_DATA[5].options[selections[5]] : null;
if (selections[5] && typeof selections[5] === 'object') {
var glazeChoice = getGroupedOption(STEP_DATA[5], 'glaze', selections[5].glaze);
var methodChoice = getGroupedOption(STEP_DATA[5], 'method', selections[5].method);
state.glaze = glazeChoice ? glazeChoice.text : '白釉';
state.glazeMethod = methodChoice ? methodChoice.text : '蘸釉';
} else {
state.glaze = opt6 ? opt6.text.split(' + ')[0] : '白釉';
state.glazeMethod = opt6 && opt6.text.split(' + ').length > 1 ? opt6.text.split(' + ')[1] : '蘸釉';
}
var opt7 = selections[7] !== null ? STEP_DATA[7].options[selections[7]] : null;
state.hasBlueLotusPattern = hasBlueLotusPattern();
state.hasBlueLotusOption = hasBlueLotusOption();
state.blueLotusTextureEnabled = blueLotusTextureEnabled;
state.patternPlacement = {
angle: patternPlacement.angle,
y: patternPlacement.y,
scale: patternPlacement.scale
};
state.gestureGlazeStrokes = gestureGlazeStrokes.map(function(stroke) {
return {
band: stroke.band,
glaze: stroke.glaze
};
});
var parts7 = opt7 ? opt7.text.split(' + ') : ['1280\u2103', '\u6c27\u5316\u70e7\u5236'];
state.fireTemp = parts7[0];
state.fireAtmosphere = parts7.length > 1 ? parts7[1] : '\u6c27\u5316\u70e7\u5236';
}

function calculateScore() {
var score = 0;
for (var i = 0; i < STEP_DATA.length; i++) {
if (selections[i] !== null) {
var opt = STEP_DATA[i].choiceGroups ? null : STEP_DATA[i].options[selections[i]];
var eff = opt ? opt.effect : 0;
if (STEP_DATA[i].choiceGroups) {
var groupSel = selections[i];
var total = 0;
for (var g = 0; g < STEP_DATA[i].choiceGroups.length; g++) {
var group = STEP_DATA[i].choiceGroups[g];
var groupOpt = getGroupedOption(STEP_DATA[i], group.key, groupSel[group.key]);
total += groupOpt ? groupOpt.effect : 0;
}
eff = Math.round(total / STEP_DATA[i].choiceGroups.length);
}
if (i === 2) {
var prevOpt = selections[0] !== null ? STEP_DATA[0].options[selections[0]] : null;
var clay = prevOpt ? prevOpt.text.split(' + ')[0] : '';
if ((clay === '粗陶土' || clay === '紫砂泥') && opt.text.indexOf('花瓶') !== -1 && opt.text.indexOf('粗陶土') === -1) {
eff = 3;
}
}
if (i === 7) {
var clayOpt = selections[0] !== null ? STEP_DATA[0].options[selections[0]] : null;
var glazeOpt = selections[5] && typeof selections[5] === 'object' ? getGroupedOption(STEP_DATA[5], 'glaze', selections[5].glaze) : (selections[5] !== null ? STEP_DATA[5].options[selections[5]] : null);
var clay = clayOpt ? clayOpt.text.split(' + ')[0] : '';
var glaze = glazeOpt ? glazeOpt.text.split(' + ')[0] : '';
var isQingci = (clay === '青瓷土' || glaze === '青釉' || glaze === '天青釉' || glaze === '粉青釉');
if (isQingci && opt.text.indexOf('还原烧制') === -1) {
eff = 3;
}
}
score += eff;
}
}
return Math.min(100, Math.round(score * 100 / 80));
}

function determineResult() {
var score = calculateScore();
if (score >= 90) return { type: 'perfect', label: '\u5b8c\u7f8e\u7cbe\u54c1', desc: '\u80ce\u8d28\u7ec6\u817b\u3001\u91c9\u8272\u5982\u7389\u3001\u5668\u578b\u89c4\u6574\uff0c\u582a\u79f0\u4f20\u4e16\u4e4b\u4f5c\uff01' };
if (score >= 60) return { type: 'flawed', label: '\u8f7b\u5fae\u7455\u75b5', desc: '\u6574\u4f53\u5c1a\u53ef\uff0c\u4f46\u5b58\u5728\u8f7b\u5fae\u5de5\u827a\u7455\u75b5\uff0c\u4e0d\u5f71\u54cd\u4f7f\u7528\u4e0e\u89c2\u8d4f\u3002' };
return { type: 'broken', label: '\u4e25\u91cd\u6b8b\u6b21', desc: '\u591a\u6b21\u64cd\u4f5c\u4e0d\u5f53\u5bfc\u81f4\u80da\u4f53\u7ed3\u6784\u53d7\u635f\uff0c\u91c9\u9762\u5f00\u88c2\u6216\u53d8\u5f62\uff0c\u65e0\u6cd5\u4f5c\u4e3a\u5408\u683c\u74f7\u5668\u4f7f\u7528\u3002' };
}

function getGlazeColor(glaze) {
var map = {
'青釉':'#7aaeb5',
'白釉':'#f3efe4',
'霁蓝釉':'#14345f',
'酱釉':'#5b321d',
'天青釉':'#9dbdc0',
'粉青釉':'#b7d2c9',
'豆青釉':'#8ea77f',
'郎窑红釉':'#9f1f1f',
'茶叶末釉':'#5f5a32'
};
return map[glaze] || '#f3efe4';
}

function getGlazeDark(glaze) {
var map = {
'青釉':'#5a8e95',
'白釉':'#d8d0c2',
'霁蓝釉':'#071a35',
'酱釉':'#351c10',
'天青釉':'#739da2',
'粉青釉':'#8db6ab',
'豆青釉':'#657d58',
'郎窑红釉':'#6f0d13',
'茶叶末釉':'#3e3a1f'
};
return map[glaze] || '#d8d0c2';
}

function ensureMakerHandsLoaded() {
if (window.Hands) return Promise.resolve();
if (!gestureThrowing.handsLoadingPromise) {
gestureThrowing.handsLoadingPromise = new Promise(function(resolve, reject) {
var src = 'libs/mediapipe/hands/hands.js';
var existing = document.querySelector('script[src="' + src + '"]');
if (existing) {
existing.addEventListener('load', resolve, {once: true});
existing.addEventListener('error', reject, {once: true});
return;
}
var script = document.createElement('script');
script.src = src;
script.async = true;
script.onload = resolve;
script.onerror = reject;
document.head.appendChild(script);
});
}
return gestureThrowing.handsLoadingPromise;
}

function getSelectedThrowingShape() {
var opt = selections[2] !== null ? STEP_DATA[2].options[selections[2]] : null;
if (!opt) return '碗';
var parts = opt.text.split(' + ');
var shape = parts.length > 2 ? parts[1] : (parts.length > 1 ? parts[1] : '碗');
return shape.split(' ')[0];
}

function createGestureProfile(shape) {
var profile = [];
var height = shape === '茶盘' ? 1.35 : (shape === '花瓶' ? 2.5 : 2.05);
var levels = GESTURE_PROFILE_LEVELS;
for (var i = 0; i < levels; i++) {
var t = i / (levels - 1);
var radius = 0.72;
if (shape === '茶杯') radius = 0.52 + t * 0.2;
else if (shape === '碗') radius = 0.45 + Math.sin(t * Math.PI * 0.72) * 0.58;
else if (shape === '花瓶') radius = 0.42 + Math.sin(t * Math.PI) * 0.46 - Math.max(0, t - 0.72) * 0.38;
else if (shape === '瓷罐') radius = 0.5 + Math.sin(t * Math.PI) * 0.42 - Math.max(0, t - 0.78) * 0.22;
else if (shape === '茶盘') radius = 0.58 + t * 0.72;
radius += Math.sin(i * 1.7) * 0.035;
profile.push({
y: -height * 0.5 + t * height,
radius: Math.max(0.18, radius),
inner: 0,
press: 0
});
}
return profile;
}

function getGestureOuterRadius(point) {
return Math.max(0.12, point.radius - (point.press || 0));
}

function getGestureLatheProfilePoints(THREE, profile) {
if (!profile || profile.length < 3) return null;
var points = [new THREE.Vector2(0, profile[0].y)];
var outerPoints = [];
var innerPoints = [];
for (var i = 0; i < profile.length; i++) {
var p = profile[i];
var outerR = getGestureOuterRadius(p);
outerPoints.push(new THREE.Vector2(outerR, p.y));
var cavity = Math.max(0, Math.min(1, (p.inner || 0) / 0.44));
var innerR = Math.max(0.04, (outerR - 0.16) * cavity);
innerPoints.push(new THREE.Vector2(innerR, p.y));
}
for (var o = 0; o < outerPoints.length; o++) {
points.push(outerPoints[o]);
}
for (var inn = innerPoints.length - 1; inn >= 0; inn--) {
points.push(innerPoints[inn]);
}
return points;
}

function getGestureOuterProfilePoints(THREE, profile) {
if (!profile || profile.length < 3) return null;
return profile.map(function(p) {
return new THREE.Vector2(getGestureOuterRadius(p), p.y);
});
}

function getShapeClassFromName(shape) {
var shapeMap = {'茶杯':'cup','碗':'bowl','花瓶':'vase','茶盘':'plate','笔筒':'brushpot','瓷罐':'jar'};
return shapeMap[shape] || 'cup';
}

function getGestureTargetProfile(shape) {
if (!window.THREE) return createGestureProfile(shape);
var shapeClass = getShapeClassFromName(shape);
var porcelainPoints = smoothProfilePoints(getProfilePoints(shapeClass, 'perfect'), 10);
var minY = porcelainPoints[0].y;
var maxY = porcelainPoints[0].y;
var maxRadius = 0;
for (var i = 0; i < porcelainPoints.length; i++) {
minY = Math.min(minY, porcelainPoints[i].y);
maxY = Math.max(maxY, porcelainPoints[i].y);
maxRadius = Math.max(maxRadius, porcelainPoints[i].x);
}
var gestureHeight = shape === '茶盘' ? 1.35 : (shape === '花瓶' ? 2.5 : 2.05);
var radiusLimit = shape === '茶盘' ? 1.45 : 1.08;
var height = Math.max(0.1, maxY - minY);
var radiusScale = maxRadius > 0 ? radiusLimit / maxRadius : 1;
return porcelainPoints.map(function(point) {
return {
y: -gestureHeight * 0.5 + ((point.y - minY) / height) * gestureHeight,
radius: Math.max(0.16, point.x * radiusScale),
inner: 0,
press: 0
};
});
}

function createGestureTargetOutline(THREE, shape) {
var profile = getGestureTargetProfile(shape);
var points = [];
for (var i = 0; i < profile.length; i++) {
var p = profile[i];
points.push(new THREE.Vector3(-getGestureOuterRadius(p), p.y, 0));
}
for (var j = profile.length - 1; j >= 0; j--) {
var q = profile[j];
points.push(new THREE.Vector3(getGestureOuterRadius(q), q.y, 0));
}
points.push(points[0].clone());
var geometry = new THREE.BufferGeometry().setFromPoints(points);
var material = new THREE.LineBasicMaterial({
color: 0x2f7f8f,
transparent: true,
opacity: 0.72,
depthTest: false
});
var outline = new THREE.Line(geometry, material);
outline.renderOrder = 5;
outline.visible = false;
return outline;
}

function buildGestureClayGeometry(THREE) {
var profile = gestureThrowing.profile || createGestureProfile('碗');
var points = getGestureLatheProfilePoints(THREE, profile);
var geometry = new THREE.LatheGeometry(points, GESTURE_LATHE_SEGMENTS);
var position = geometry.attributes.position;
for (var j = 0; j < position.count; j++) {
var x = position.getX(j);
var y = position.getY(j);
var z = position.getZ(j);
var n = Math.sin(y * 8.7 + Math.atan2(z, x) * 5.0) * 0.012;
position.setXYZ(j, x * (1 + n), y, z * (1 + n));
}
geometry.computeVertexNormals();
return geometry;
}

function updateGestureClayMesh() {
var THREE = window.THREE;
if (!THREE || !gestureThrowing.body) return;
var nextGeometry = buildGestureClayGeometry(THREE);
gestureThrowing.body.geometry.dispose();
gestureThrowing.body.geometry = nextGeometry;
}

function cloneGestureProfile(profile) {
return profile ? profile.map(function(p) {
return {y: p.y, radius: p.radius, inner: p.inner || 0, press: p.press || 0};
}) : null;
}

function renderGestureThrowingScene() {
cleanupPreview3D();
cleanupGestureThrowing();
var container = document.getElementById('maker-step-container');
if (!container) return;
container.classList.add('show', 'gesture-throwing-mode');
gestureThrowing.active = true;
gestureThrowing.phase = 1;
gestureThrowing.selectedShape = getSelectedThrowingShape();
gestureThrowing.profile = createGestureProfile(gestureThrowing.selectedShape);
gestureThrowing.phaseOneBaseProfile = cloneGestureProfile(gestureThrowing.profile);
gestureThrowing.phaseTwoBaseProfile = null;
gestureThrowing.handlePath = null;
gestureThrowing.handleDrawing = false;
gestureThrowing.handleProgress = 0;
gestureThrowing.lastHandleGestureY = null;
gestureThrowing.lastHandleGesturePoint = null;
gestureThrowing.handleGuideIndex = 0;
container.innerHTML =
'<div class="gesture-throwing-workspace">'
+ '<div class="gesture-throwing-stage">'
+ '<div id="gesture-throwing-viewport"></div>'
+ '<canvas id="gesture-throwing-skeleton"></canvas>'
+ '<div class="gesture-throwing-reticle"></div>'
+ '<video id="gesture-throwing-video" playsinline muted></video>'
+ '</div>'
+ '<div class="gesture-throwing-panel">'
+ '<div class="book-page-label">手势拉坯</div>'
+ '<div id="gesture-throwing-title">第一步：压扁与拉高</div>'
+ '<div id="gesture-throwing-status">请允许摄像头。右手张开放在泥块上可向下压扁；左手放在泥块上并向上抬升可拉高；只伸出一根食指按在中央可逐渐形成内腔。</div>'
+ '<div class="gesture-throwing-actions">'
+ '<button id="gesture-throwing-next-phase" type="button">进入外壁塑形</button>'
+ '<button id="gesture-throwing-reset" type="button">重置当前步骤</button>'
+ '<button id="gesture-throwing-finish" type="button">完成并返回流程</button>'
+ '<button id="gesture-throwing-cancel" type="button">退出手势制瓷</button>'
+ '</div>'
+ '</div>'
+ '</div>';
document.getElementById('gesture-throwing-next-phase').addEventListener('click', function() {
if (gestureThrowing.phase === 2 && gestureThrowing.selectedShape === '茶杯') {
gestureThrowing.phase = 3;
gestureThrowing.handlePath = null;
gestureThrowing.handleDrawing = false;
gestureThrowing.handleProgress = 0;
gestureThrowing.lastHandleGestureY = null;
gestureThrowing.lastHandleGesturePoint = null;
gestureThrowing.handleGuideIndex = 0;
setGestureThrowingPhaseView();
updateGestureHandlePreview();
return;
}
gestureThrowing.phase = 2;
gestureThrowing.phaseTwoBaseProfile = cloneGestureProfile(gestureThrowing.profile);
setGestureThrowingPhaseView();
});
document.getElementById('gesture-throwing-reset').addEventListener('click', resetGestureThrowingPhase);
document.getElementById('gesture-throwing-finish').addEventListener('click', finishGestureThrowing);
document.getElementById('gesture-throwing-cancel').addEventListener('click', cancelGestureThrowing);
initGestureThrowing3D();
startGestureThrowingCamera();
}

function startGestureThrowing() {
var opt = selections[2] !== null ? STEP_DATA[2].options[selections[2]] : null;
if (!opt || opt.text.indexOf('不定中心 + 直接开孔') !== -1) return;
renderGestureThrowingScene();
}

function initGestureThrowing3D() {
var viewport = document.getElementById('gesture-throwing-viewport');
var THREE = window.THREE;
if (!viewport || !THREE || typeof THREE.Scene !== 'function') return;
var width = viewport.clientWidth || 720;
var height = viewport.clientHeight || 520;
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xf2ede5);
var camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(width, height);
viewport.appendChild(renderer.domElement);
scene.add(new THREE.AmbientLight(0xffffff, 0.7));
var key = new THREE.DirectionalLight(0xffffff, 1.05);
key.position.set(4, 5, 5);
scene.add(key);
var fill = new THREE.DirectionalLight(0x9cc7d0, 0.45);
fill.position.set(-4, 1.5, -3);
scene.add(fill);
var wheel = new THREE.Mesh(
new THREE.CylinderGeometry(1.65, 1.75, 0.16, GESTURE_LATHE_SEGMENTS),
new THREE.MeshStandardMaterial({color: 0xbda88a, roughness: 0.48, metalness: 0.02})
);
wheel.position.y = -1.18;
wheel.receiveShadow = true;
scene.add(wheel);
var clay = new THREE.Mesh(
buildGestureClayGeometry(THREE),
new THREE.MeshStandardMaterial({color: 0x8f6d50, roughness: 0.74, metalness: 0})
);
clay.castShadow = true;
clay.receiveShadow = true;
scene.add(clay);
var targetOutline = createGestureTargetOutline(THREE, gestureThrowing.selectedShape);
scene.add(targetOutline);
gestureThrowing.renderer = renderer;
gestureThrowing.scene = scene;
gestureThrowing.camera = camera;
gestureThrowing.body = clay;
gestureThrowing.wheel = wheel;
gestureThrowing.targetOutline = targetOutline;
gestureThrowing.resizeHandler = function() {
var nextViewport = document.getElementById('gesture-throwing-viewport');
if (!nextViewport || !gestureThrowing.renderer || !gestureThrowing.camera) return;
var w = nextViewport.clientWidth || 720;
var h = nextViewport.clientHeight || 520;
gestureThrowing.camera.aspect = w / h;
gestureThrowing.camera.updateProjectionMatrix();
gestureThrowing.renderer.setSize(w, h);
};
window.addEventListener('resize', gestureThrowing.resizeHandler);
setGestureThrowingPhaseView();
function animate() {
if (!gestureThrowing.active) return;
gestureThrowing.animationId = requestAnimationFrame(animate);
if (gestureThrowing.phase !== 3) {
if (gestureThrowing.wheel) gestureThrowing.wheel.rotation.y += 0.055;
if (gestureThrowing.body) gestureThrowing.body.rotation.y += 0.028;
}
renderer.render(scene, camera);
}
animate();
}

function setGestureThrowingPhaseView() {
var title = document.getElementById('gesture-throwing-title');
var status = document.getElementById('gesture-throwing-status');
var nextButton = document.getElementById('gesture-throwing-next-phase');
if (!gestureThrowing.camera) return;
if (gestureThrowing.phase === 1) {
gestureThrowing.camera.position.set(0, 3.0, 4.0);
gestureThrowing.camera.lookAt(0, -0.25, 0);
if (title) title.textContent = '第一步：压扁与拉高';
if (status) status.textContent = '右手张开放在泥块上可向下压扁；左手放在泥块上并向上抬升可拉高；只伸出一根食指按在中央可逐渐形成内腔。';
if (gestureThrowing.targetOutline) gestureThrowing.targetOutline.visible = false;
if (nextButton) {
nextButton.textContent = '进入外壁塑形';
nextButton.disabled = false;
}
} else if (gestureThrowing.phase === 2) {
gestureThrowing.camera.position.set(0, 0.35, 5.0);
gestureThrowing.camera.lookAt(0, 0.1, 0);
if (title) title.textContent = '第二步：外壁塑形';
if (status) status.textContent = '上下移动食指选择塑形高度；参考蓝色轮廓线，右手触碰处向内缩，左手触碰处向外扩，顶部和底部也可以塑形。';
if (gestureThrowing.targetOutline) gestureThrowing.targetOutline.visible = true;
if (nextButton) {
nextButton.textContent = gestureThrowing.selectedShape === '茶杯' ? '进入杯柄塑形' : '继续塑形';
nextButton.disabled = gestureThrowing.selectedShape !== '茶杯';
}
} else {
gestureThrowing.camera.position.set(0, 0.45, 4.2);
gestureThrowing.camera.lookAt(0.45, 0.1, 0);
if (title) title.textContent = '第三步：杯柄塑形';
if (status) status.textContent = '侧视图已锁定。用食指沿蓝色杯柄路线移动，预设杯柄会从杯壁外侧逐渐形成。';
if (gestureThrowing.targetOutline) gestureThrowing.targetOutline.visible = false;
if (nextButton) {
nextButton.textContent = '完成杯柄';
nextButton.disabled = false;
}
}
gestureThrowing.camera.updateProjectionMatrix();
}

function startGestureThrowingCamera() {
var video = document.getElementById('gesture-throwing-video');
gestureThrowing.video = video;
gestureThrowing.skeletonCanvas = document.getElementById('gesture-throwing-skeleton');
gestureThrowing.skeletonCtx = gestureThrowing.skeletonCanvas ? gestureThrowing.skeletonCanvas.getContext('2d') : null;
if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
setGestureThrowingStatus('当前浏览器不支持摄像头访问，请通过 localhost 使用 Chrome/Edge。');
return;
}
ensureMakerHandsLoaded().then(function() {
gestureThrowing.hands = new window.Hands({
locateFile: function(file) {
return 'libs/mediapipe/hands/' + file;
}
});
gestureThrowing.hands.setOptions({
maxNumHands: 2,
modelComplexity: 0,
minDetectionConfidence: 0.65,
minTrackingConfidence: 0.65
});
gestureThrowing.hands.onResults(onGestureThrowingResults);
return navigator.mediaDevices.getUserMedia({
video: {width: 320, height: 240, facingMode: 'user'},
audio: false
});
}).then(function(stream) {
gestureThrowing.stream = stream;
video.srcObject = stream;
return video.play();
}).then(function() {
gestureThrowingFrameLoop();
setGestureThrowingStatus('手势识别已开启。使用食指靠近泥坯进行塑形。');
}).catch(function(error) {
console.warn('手势制瓷启动失败:', error);
setGestureThrowingStatus('手势制瓷启动失败：请确认摄像头权限，并通过本地服务器打开网站。');
});
}

function gestureThrowingFrameLoop() {
if (!gestureThrowing.active || !gestureThrowing.hands || !gestureThrowing.video || gestureThrowing.video.readyState < 2) {
gestureThrowing.frameId = gestureThrowing.active ? requestAnimationFrame(gestureThrowingFrameLoop) : null;
return;
}
if (!gestureThrowing.processingFrame) {
gestureThrowing.processingFrame = true;
gestureThrowing.hands.send({image: gestureThrowing.video}).catch(function(error) {
console.warn('手势制瓷帧处理失败:', error);
}).finally(function() {
gestureThrowing.processingFrame = false;
});
}
gestureThrowing.frameId = requestAnimationFrame(gestureThrowingFrameLoop);
}

function onGestureThrowingResults(results) {
if (!gestureThrowing.active || !results.multiHandLandmarks || !results.multiHandLandmarks.length) {
gestureThrowing.lastFinger = null;
clearGestureThrowingSkeleton();
return;
}
drawGestureThrowingSkeleton(results);
if (gestureThrowing.phase === 1) {
applyPhaseOneHandShaping(results);
} else if (gestureThrowing.phase === 2) {
var hand = results.multiHandLandmarks[0];
var finger = hand[8];
var mirroredX = 1 - finger.x;
var label = getGestureHandLabel(results, 0, hand);
applyWallPressGesture(finger, mirroredX, label);
} else {
applyHandleDrawingGesture(results.multiHandLandmarks[0]);
}
}

function getGestureHandLabel(results, index, hand) {
var handed = results.multiHandedness && results.multiHandedness[index];
var label = handed && handed.label ? handed.label : '';
if (label === 'Left') {
label = 'Right';
} else if (label === 'Right') {
label = 'Left';
}
if (!label) {
label = (1 - hand[0].x) < 0.5 ? 'Right' : 'Left';
}
return label;
}

function isOpenPalm(hand) {
var wrist = hand[0];
var tips = [8, 12, 16, 20];
var extended = 0;
for (var i = 0; i < tips.length; i++) {
if (Math.abs(hand[tips[i]].y - wrist.y) > 0.16) extended++;
}
var indexMiddleSpread = Math.abs(hand[8].x - hand[12].x);
return extended >= 3 && indexMiddleSpread > 0.035;
}

function isSingleIndexFinger(hand) {
var wrist = hand[0];
var indexExtended = Math.abs(hand[8].y - wrist.y) > 0.16;
var middleFolded = Math.abs(hand[12].y - wrist.y) < 0.14;
var ringFolded = Math.abs(hand[16].y - wrist.y) < 0.14;
var pinkyFolded = Math.abs(hand[20].y - wrist.y) < 0.14;
return indexExtended && middleFolded && ringFolded && pinkyFolded;
}

function applyPhaseOneHandShaping(results) {
var hands = results.multiHandLandmarks || [];
var changed = false;
var opened = false;
for (var h = 0; h < hands.length; h++) {
var hand = hands[h];
var label = getGestureHandLabel(results, h, hand);
var palm = hand[9];
var mirroredX = 1 - palm.x;
var onModel = Math.abs(mirroredX - 0.5) < 0.28 && palm.y > 0.22 && palm.y < 0.78;
if (!onModel) continue;
if (isSingleIndexFinger(hand)) {
applyOpeningGesture(hand[8], 1 - hand[8].x);
opened = true;
changed = true;
continue;
}
if (label === 'Right' && isOpenPalm(hand)) {
flattenGestureClay(0.018);
changed = true;
}
if (label === 'Left') {
var lift = Math.max(0, 0.58 - palm.y);
if (lift > 0.02) {
raiseGestureClay(Math.min(0.018, lift * 0.028));
changed = true;
}
}
}
if (changed && !opened) {
setGestureThrowingStatus('第一步：右手张开放在泥块上可向下压扁；左手放在泥块上并向上抬升可拉高；单指按中央可形成内腔。');
updateGestureClayMesh();
}
}

function flattenGestureClay(amount) {
var profile = gestureThrowing.profile;
if (!profile) return;
for (var i = 0; i < profile.length; i++) {
var t = i / (profile.length - 1);
profile[i].y *= 1 - amount * 0.45;
profile[i].radius = Math.min(1.65, profile[i].radius + amount * (0.65 + Math.sin(t * Math.PI) * 0.55));
profile[i].inner = Math.max(0, (profile[i].inner || 0) - amount * 0.35);
}
}

function raiseGestureClay(amount) {
var profile = gestureThrowing.profile;
if (!profile) return;
for (var i = 0; i < profile.length; i++) {
var t = i / (profile.length - 1);
var centerWeight = Math.sin(t * Math.PI);
profile[i].y *= 1 + amount * 0.9;
profile[i].radius = Math.max(0.2, profile[i].radius - amount * (0.45 + centerWeight * 0.32));
}
}

function resizeGestureThrowingSkeleton() {
var canvas = gestureThrowing.skeletonCanvas;
if (!canvas) return;
var stage = canvas.parentNode;
var width = stage ? stage.clientWidth : 720;
var height = stage ? stage.clientHeight : 520;
if (canvas.width !== width || canvas.height !== height) {
canvas.width = width;
canvas.height = height;
}
}

function clearGestureThrowingSkeleton() {
var canvas = gestureThrowing.skeletonCanvas;
var ctx = gestureThrowing.skeletonCtx;
if (!canvas || !ctx) return;
ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawGestureThrowingSkeleton(results) {
var canvas = gestureThrowing.skeletonCanvas;
var ctx = gestureThrowing.skeletonCtx;
if (!canvas || !ctx) return;
resizeGestureThrowingSkeleton();
clearGestureThrowingSkeleton();
if (gestureThrowing.phase === 3) drawGestureHandleGuide(ctx, canvas);
var hands = results.multiHandLandmarks || [];
for (var h = 0; h < hands.length; h++) {
var hand = hands[h];
var accent = h === 0 ? '#78c8d8' : '#9fc8f4';
ctx.save();
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 4;
ctx.strokeStyle = accent;
ctx.shadowColor = 'rgba(38, 92, 106, 0.28)';
ctx.shadowBlur = 12;
for (var i = 0; i < gestureThrowing.handConnections.length; i++) {
var a = hand[gestureThrowing.handConnections[i][0]];
var b = hand[gestureThrowing.handConnections[i][1]];
ctx.beginPath();
ctx.moveTo((1 - a.x) * canvas.width, a.y * canvas.height);
ctx.lineTo((1 - b.x) * canvas.width, b.y * canvas.height);
ctx.stroke();
}
ctx.shadowBlur = 0;
for (var j = 0; j < hand.length; j++) {
var p = hand[j];
var isTip = j === 4 || j === 8 || j === 12 || j === 16 || j === 20;
ctx.beginPath();
ctx.fillStyle = j === 8 ? '#ffffff' : accent;
ctx.strokeStyle = j === 8 ? '#2f7180' : accent;
ctx.lineWidth = j === 8 ? 2.5 : 1.5;
ctx.arc((1 - p.x) * canvas.width, p.y * canvas.height, j === 8 ? 8 : (isTip ? 5.5 : 3.5), 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
}
var indexTip = hand[8];
ctx.fillStyle = 'rgba(48, 95, 106, 0.9)';
ctx.font = '15px "Noto Serif SC", serif';
ctx.fillText('食指塑形点', (1 - indexTip.x) * canvas.width + 10, indexTip.y * canvas.height - 10);
ctx.restore();
}
}

function drawGestureHandleGuide(ctx, canvas) {
ctx.save();
ctx.strokeStyle = 'rgba(47, 127, 143, 0.7)';
ctx.fillStyle = 'rgba(47, 127, 143, 0.1)';
ctx.lineWidth = 3;
var points = [
{x: canvas.width * 0.54, y: canvas.height * 0.34},
{x: canvas.width * 0.78, y: canvas.height * 0.42},
{x: canvas.width * 0.78, y: canvas.height * 0.58},
{x: canvas.width * 0.54, y: canvas.height * 0.66}
];
ctx.beginPath();
ctx.moveTo(points[0].x, points[0].y);
ctx.bezierCurveTo(points[1].x, points[1].y, points[2].x, points[2].y, points[3].x, points[3].y);
ctx.stroke();
for (var i = 0; i < points.length; i++) {
ctx.beginPath();
ctx.arc(points[i].x, points[i].y, i === gestureThrowing.handleGuideIndex ? 10 : 6, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
}
ctx.fillStyle = 'rgba(48, 95, 106, 0.9)';
ctx.font = '14px "Noto Serif SC", serif';
ctx.fillText('沿线移动食指', canvas.width * 0.58, canvas.height * 0.29);
ctx.restore();
}

function applyOpeningGesture(finger, mirroredX) {
var dx = Math.abs(mirroredX - 0.5);
var dy = Math.abs(finger.y - 0.48);
if (dx > 0.18 || dy > 0.26) return;
for (var i = 3; i < gestureThrowing.profile.length; i++) {
var t = i / (gestureThrowing.profile.length - 1);
var weight = Math.max(0, 1 - Math.abs(t - 0.72) / 0.5);
gestureThrowing.profile[i].inner = Math.min(0.44, (gestureThrowing.profile[i].inner || 0) + 0.015 * weight);
}
setGestureThrowingStatus('正在开坯：中心持续下凹，可点击“进入外壁塑形”继续。');
updateGestureClayMesh();
}

function applyWallPressGesture(finger, mirroredX, handLabel) {
var level = Math.max(0, Math.min(1, 1 - finger.y));
var profile = gestureThrowing.profile;
if (!profile || !profile.length) return;
var nearestIndex = Math.max(0, Math.min(profile.length - 1, Math.round(level * (profile.length - 1))));
var nearest = profile[nearestIndex];
var visibleRadius = Math.max(0.08, nearest.radius - (nearest.press || 0) - Math.min(nearest.inner || 0, nearest.radius * 0.55));
var axisDistance = Math.abs(mirroredX - 0.5);
var nearBottom = level < 0.1;
var nearTop = level > 0.9;
var screenRadius = Math.max(0.075, Math.min(0.28, visibleRadius * 0.18));
var contactBand = nearBottom || nearTop ? 0.095 : 0.045;
var contactDepth = screenRadius + contactBand - axisDistance;
if (contactDepth <= 0) {
setGestureThrowingStatus('第二步：右手触碰向内缩，左手触碰向外扩；顶部、底部和器身都可塑形。');
return;
}
var pressure = Math.min(0.04, contactDepth * (nearBottom || nearTop ? 0.22 : 0.16));
if (pressure <= 0.001) return;
var expand = handLabel === 'Left';
for (var i = 0; i < profile.length; i++) {
var t = i / (profile.length - 1);
var edgeZone = nearBottom ? 0 : (nearTop ? 1 : level);
var influence = nearBottom || nearTop ? 0.2 : 0.16;
var edgeBoost = i === 0 || i === profile.length - 1 ? 1.45 : 1;
var weight = Math.max(0, 1 - Math.abs(t - edgeZone) / influence) * edgeBoost;
if (expand) {
profile[i].press = Math.max(-0.42, (profile[i].press || 0) - pressure * weight);
profile[i].radius = Math.min(1.8, profile[i].radius + pressure * weight * 0.18);
} else {
profile[i].press = Math.min(0.62, (profile[i].press || 0) + pressure * weight);
}
}
setGestureThrowingStatus(expand ? '左手正在外扩：手指触碰处向外扩张。' : '右手正在内缩：手指触碰处向内收缩。');
updateGestureClayMesh();
}

function isPinchingGesture(hand) {
var thumb = hand[4];
var index = hand[8];
var dx = thumb.x - index.x;
var dy = thumb.y - index.y;
return Math.sqrt(dx * dx + dy * dy) < 0.055;
}

function mapHandlePointFromHand(hand) {
var index = hand[8];
var x = 1 - index.x;
var y = index.y;
var px = 0.45 + Math.max(0, Math.min(1, (x - 0.5) / 0.34)) * 0.85;
var py = 1.05 - Math.max(0, Math.min(1, (y - 0.28) / 0.42)) * 0.78;
return {x: px, y: py};
}

function getDefaultHandlePath() {
return [
{x: 0.72, y: 0.92},
{x: 1.04, y: 0.78},
{x: 1.06, y: 0.5},
{x: 0.68, y: 0.32}
];
}

function getProfileOuterRadiusAt(profile, y) {
if (!profile || !profile.length) return 0.7;
if (y <= profile[0].y) return getGestureOuterRadius(profile[0]);
for (var i = 1; i < profile.length; i++) {
if (y <= profile[i].y) {
var prev = profile[i - 1];
var next = profile[i];
var span = Math.max(0.001, next.y - prev.y);
var t = (y - prev.y) / span;
return getGestureOuterRadius(prev) + (getGestureOuterRadius(next) - getGestureOuterRadius(prev)) * t;
}
}
return getGestureOuterRadius(profile[profile.length - 1]);
}

function getGestureHandlePath(profile) {
var srcProfile = profile || gestureThrowing.profile;
var minY = srcProfile && srcProfile.length ? srcProfile[0].y : -1;
var maxY = srcProfile && srcProfile.length ? srcProfile[srcProfile.length - 1].y : 1;
var height = Math.max(0.1, maxY - minY);
var topY = minY + height * 0.74;
var bottomY = minY + height * 0.36;
var topX = getProfileOuterRadiusAt(srcProfile, topY) + 0.045;
var bottomX = getProfileOuterRadiusAt(srcProfile, bottomY) + 0.045;
var outerX = Math.max(topX, bottomX) + Math.max(0.32, height * 0.18);
return [
{x: topX, y: topY},
{x: outerX, y: minY + height * 0.66},
{x: outerX + 0.03, y: minY + height * 0.48},
{x: bottomX, y: bottomY}
];
}

function getModelHandlePathFromProfilePoints(profilePoints) {
if (!profilePoints || profilePoints.length < 2) return getDefaultHandlePath();
var minY = profilePoints[0].y;
var maxY = profilePoints[profilePoints.length - 1].y;
var height = Math.max(0.1, maxY - minY);
var topY = minY + height * 0.74;
var bottomY = minY + height * 0.36;
var topX = getProfileRadiusAtY(profilePoints, topY) + 0.035;
var bottomX = getProfileRadiusAtY(profilePoints, bottomY) + 0.035;
var outerX = Math.max(topX, bottomX) + Math.max(0.28, height * 0.2);
return [
{x: topX, y: topY},
{x: outerX, y: minY + height * 0.66},
{x: outerX + 0.03, y: minY + height * 0.48},
{x: bottomX, y: bottomY}
];
}

function applyHandleDrawingGesture(hand) {
var fingerPoint = mapHandlePointFromHand(hand);
var guidePath = getGestureHandlePath();
var route = sampleHandleRoute(guidePath, 48);
var nearest = findNearestHandleRoutePoint(fingerPoint, route);
var current = gestureThrowing.handleProgress || 0;
var motion = 0;
if (gestureThrowing.lastHandleGesturePoint) {
var mdx = fingerPoint.x - gestureThrowing.lastHandleGesturePoint.x;
var mdy = fingerPoint.y - gestureThrowing.lastHandleGesturePoint.y;
motion = Math.sqrt(mdx * mdx + mdy * mdy);
}
gestureThrowing.lastHandleGesturePoint = fingerPoint;
var targetProgress = nearest.distance < 0.42 && nearest.t >= current - 0.18 ? nearest.t + 0.03 : current;
var motionProgress = motion > 0.002 ? Math.min(0.045, 0.008 + motion * 0.32) : 0;
gestureThrowing.handleProgress = Math.min(1, Math.max(current + motionProgress, targetProgress, current));
gestureThrowing.handlePath = guidePath;
gestureThrowing.handleGuideIndex = Math.min(3, Math.floor((gestureThrowing.handleProgress || 0) * 4));
var percent = Math.round((gestureThrowing.handleProgress || 0) * 100);
if (gestureThrowing.handleProgress >= 1) {
setGestureThrowingStatus('预设杯柄已完整形成，可点击“完成杯柄”。');
} else {
setGestureThrowingStatus('沿蓝色杯柄路线移动食指，杯柄会按预设形状生成。当前进度 ' + percent + '%。');
}
updateGestureHandlePreview();
}

function sampleHandleRoute(path, count) {
var THREE = window.THREE;
if (!THREE || !path || path.length < 2) return [];
var curve = new THREE.CatmullRomCurve3(path.map(function(p) {
return new THREE.Vector3(p.x, p.y, 0);
}));
var route = [];
for (var i = 0; i <= count; i++) {
var t = i / count;
var point = curve.getPoint(t);
route.push({x: point.x, y: point.y, t: t});
}
return route;
}

function findNearestHandleRoutePoint(point, route) {
var nearest = {distance: Infinity, t: 0};
for (var i = 0; i < route.length; i++) {
var dx = point.x - route[i].x;
var dy = point.y - route[i].y;
var distance = Math.sqrt(dx * dx + dy * dy);
if (distance < nearest.distance) {
nearest = {distance: distance, t: route[i].t};
}
}
return nearest;
}

function updateGestureHandlePreview() {
var THREE = window.THREE;
if (!THREE || !gestureThrowing.scene) return;
if (gestureThrowing.handlePreview) {
gestureThrowing.scene.remove(gestureThrowing.handlePreview);
if (gestureThrowing.handlePreview.geometry) gestureThrowing.handlePreview.geometry.dispose();
}
var progress = Math.max(0, Math.min(1, gestureThrowing.handleProgress || 0));
if (progress <= 0.015) {
gestureThrowing.handlePreview = null;
return;
}
var basePoints = getGestureHandlePath().map(function(p) {
return new THREE.Vector3(p.x, p.y, 0.22);
});
var baseCurve = new THREE.CatmullRomCurve3(basePoints);
var segments = Math.max(3, Math.ceil(48 * progress));
var points = [];
for (var i = 0; i <= segments; i++) {
points.push(baseCurve.getPoint((i / segments) * progress));
}
var curve = new THREE.CatmullRomCurve3(points);
var geometry = new THREE.TubeGeometry(curve, Math.max(12, points.length * 4), 0.04, 18, false);
var material = new THREE.MeshStandardMaterial({color: 0x8f6d50, roughness: 0.74, metalness: 0});
var handle = new THREE.Mesh(geometry, material);
handle.castShadow = true;
handle.receiveShadow = true;
gestureThrowing.handlePreview = handle;
gestureThrowing.scene.add(handle);
}

function setGestureThrowingStatus(text) {
var status = document.getElementById('gesture-throwing-status');
if (status) status.textContent = text;
}

function resetGestureThrowingPhase() {
if (gestureThrowing.phase === 1 && gestureThrowing.phaseOneBaseProfile) {
gestureThrowing.profile = cloneGestureProfile(gestureThrowing.phaseOneBaseProfile);
setGestureThrowingStatus('第一步已重置。右手张开可压扁，左手上抬可拉高，单指按中央可形成内腔。');
} else if (gestureThrowing.phase === 2) {
gestureThrowing.profile = cloneGestureProfile(gestureThrowing.phaseTwoBaseProfile || gestureThrowing.phaseOneBaseProfile);
setGestureThrowingStatus('第二步已重置。右手触碰向内缩，左手触碰向外扩。');
} else if (gestureThrowing.phase === 3) {
gestureThrowing.handlePath = null;
gestureThrowing.handleDrawing = false;
gestureThrowing.handleProgress = 0;
gestureThrowing.lastHandleGestureY = null;
gestureThrowing.lastHandleGesturePoint = null;
gestureThrowing.handleGuideIndex = 0;
setGestureThrowingStatus('第三步已重置。用食指沿蓝色杯柄路线移动，预设杯柄会逐渐形成。');
updateGestureHandlePreview();
return;
}
updateGestureClayMesh();
}

function finishGestureThrowing() {
if (gestureThrowing.selectedShape === '茶杯') gestureThrowing.handlePath = getGestureHandlePath();
state.gestureThrowingProfile = gestureThrowing.profile ? gestureThrowing.profile.map(function(p) {
return {y: p.y, radius: p.radius, inner: p.inner || 0, press: p.press || 0};
}) : null;
state.gestureHandlePath = gestureThrowing.selectedShape === '茶杯'
? [{autoFit: true}]
: null;
cleanupGestureThrowing();
currentStep = 2;
renderStep(currentStep);
renderProgress();
showFeedback(true, '手势制瓷已完成。你已经通过开坯和外壁塑形获得自定义坯体，可继续进入修坯挖足。');
}

function cancelGestureThrowing() {
cleanupGestureThrowing();
currentStep = 2;
renderStep(currentStep);
renderProgress();
}

function getSelectedGlazeName() {
if (selections[5] && typeof selections[5] === 'object') {
var glazeOpt = getGroupedOption(STEP_DATA[5], 'glaze', selections[5].glaze);
return glazeOpt ? glazeOpt.text : '白釉';
}
return '白釉';
}

function startGestureGlazing() {
if (!selections[5] || typeof selections[5] !== 'object' || typeof selections[5].glaze !== 'number') return;
cleanupGestureGlazing();
renderGestureGlazingScene();
}

function renderGestureGlazingScene() {
cleanupPreview3D();
var container = document.getElementById('maker-step-container');
if (!container) return;
container.classList.add('show', 'gesture-glazing-mode');
gestureGlazing.shape = getPreviewState().shape === 'raw' ? '茶杯' : getPreviewState().shape;
gestureGlazing.glaze = getSelectedGlazeName();
container.innerHTML =
'<div class="gesture-glazing-workspace">'
+ '<div class="gesture-glazing-stage">'
+ '<div id="gesture-glazing-viewport"></div>'
+ '<canvas id="gesture-glazing-skeleton"></canvas>'
+ '<video id="gesture-glazing-video" playsinline muted></video>'
+ '</div>'
+ '<div class="gesture-glazing-panel">'
+ '<div class="book-page-label">手势上釉</div>'
+ '<div id="gesture-glazing-title">逐层覆盖釉面</div>'
+ '<div id="gesture-glazing-status">请允许摄像头。让手部骨架触碰瓷器模型，触碰高度的一整圈会被上釉。</div>'
+ '<div class="gesture-glazing-actions">'
+ '<button id="gesture-glazing-clear" type="button"' + (gestureGlazeStrokes.length ? '' : ' disabled') + '>清除釉迹</button>'
+ '<button id="gesture-glazing-finish" type="button">完成并返回流程</button>'
+ '<button id="gesture-glazing-cancel" type="button">退出手势上釉</button>'
+ '</div>'
+ '</div>'
+ '</div>';
document.getElementById('gesture-glazing-clear').addEventListener('click', clearGestureGlazingStrokes);
document.getElementById('gesture-glazing-finish').addEventListener('click', finishGestureGlazing);
document.getElementById('gesture-glazing-cancel').addEventListener('click', cancelGestureGlazing);
initGestureGlazing3D();
startGestureGlazingCamera();
}

function startGestureGlazingCamera() {
var video = document.getElementById('gesture-glazing-video');
var canvas = document.getElementById('gesture-glazing-skeleton');
gestureGlazing.statusEl = document.getElementById('gesture-glazing-status');
if (!video || !canvas) return;
gestureGlazing.active = true;
gestureGlazing.video = video;
gestureGlazing.skeletonCanvas = canvas;
gestureGlazing.skeletonCtx = canvas.getContext('2d');
if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
setGestureGlazingStatus('当前浏览器不支持摄像头访问，请通过 localhost 使用 Chrome/Edge。');
return;
}
ensureMakerHandsLoaded().then(function() {
gestureGlazing.hands = new window.Hands({
locateFile: function(file) {
return 'libs/mediapipe/hands/' + file;
}
});
gestureGlazing.hands.setOptions({
maxNumHands: 1,
modelComplexity: 0,
minDetectionConfidence: 0.65,
minTrackingConfidence: 0.65
});
gestureGlazing.hands.onResults(onGestureGlazingResults);
return navigator.mediaDevices.getUserMedia({
video: {width: 320, height: 240, facingMode: 'user'},
audio: false
});
}).then(function(stream) {
gestureGlazing.stream = stream;
video.srcObject = stream;
return video.play();
}).then(function() {
gestureGlazingFrameLoop();
setGestureGlazingStatus('手势上釉已启动。让手部骨架触碰瓷器模型，上下移动可逐层覆盖釉面。');
}).catch(function(error) {
console.warn('手势上釉启动失败:', error);
setGestureGlazingStatus('手势上釉启动失败：请确认摄像头权限，并通过本地服务器打开网站。');
});
}

function initGestureGlazing3D() {
var viewport = document.getElementById('gesture-glazing-viewport');
var THREE = window.THREE;
if (!viewport || !THREE || typeof THREE.Scene !== 'function') return;
var width = viewport.clientWidth || 720;
var height = viewport.clientHeight || 520;
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xf2ede5);
var camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
camera.position.set(0, 0.5, 4.8);
camera.lookAt(0, 0, 0);
var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(width, height);
viewport.appendChild(renderer.domElement);
scene.add(new THREE.AmbientLight(0xffffff, 0.72));
var key = new THREE.DirectionalLight(0xffffff, 1.08);
key.position.set(4, 5, 5);
scene.add(key);
var fill = new THREE.DirectionalLight(0x9cc7d0, 0.42);
fill.position.set(-4, 1.5, -3);
scene.add(fill);
var base = new THREE.Mesh(
new THREE.CylinderGeometry(1.45, 1.45, 0.06, 160),
new THREE.MeshStandardMaterial({color:0xd8c7ad, roughness:0.48})
);
base.position.y = -1.28;
scene.add(base);
gestureGlazing.renderer = renderer;
gestureGlazing.scene = scene;
gestureGlazing.camera = camera;
gestureGlazing.resizeHandler = function() {
var nextViewport = document.getElementById('gesture-glazing-viewport');
if (!nextViewport || !gestureGlazing.renderer || !gestureGlazing.camera) return;
var w = nextViewport.clientWidth || 720;
var h = nextViewport.clientHeight || 520;
gestureGlazing.camera.aspect = w / h;
gestureGlazing.camera.updateProjectionMatrix();
gestureGlazing.renderer.setSize(w, h);
};
window.addEventListener('resize', gestureGlazing.resizeHandler);
updateGestureGlazingModel();
function animate() {
if (!gestureGlazing.renderer) return;
gestureGlazing.animationId = requestAnimationFrame(animate);
if (gestureGlazing.model) gestureGlazing.model.rotation.y += 0.012;
renderer.render(scene, camera);
}
animate();
}

function updateGestureGlazingModel() {
var THREE = window.THREE;
if (!gestureGlazing.scene || !THREE) return;
var previousRotation = null;
if (gestureGlazing.model) {
previousRotation = gestureGlazing.model.rotation.clone();
gestureGlazing.scene.remove(gestureGlazing.model);
}
var shapeClass = getShapeClassFromName(gestureGlazing.shape);
gestureGlazing.model = createPorcelainModel(THREE, shapeClass, {type: 'perfect'}, getGlazeColor(gestureGlazing.glaze), {
enabled: false,
angle: 0,
y: 0,
scale: 1
}, state.gestureThrowingProfile, gestureGlazeStrokes, state.gestureHandlePath);
gestureGlazing.model.scale.multiplyScalar(0.9);
if (previousRotation) gestureGlazing.model.rotation.copy(previousRotation);
gestureGlazing.scene.add(gestureGlazing.model);
}

function gestureGlazingFrameLoop() {
if (!gestureGlazing.active || !gestureGlazing.hands || !gestureGlazing.video || gestureGlazing.video.readyState < 2) {
gestureGlazing.frameId = gestureGlazing.active ? requestAnimationFrame(gestureGlazingFrameLoop) : null;
return;
}
if (!gestureGlazing.processingFrame) {
gestureGlazing.processingFrame = true;
gestureGlazing.hands.send({image: gestureGlazing.video}).catch(function(error) {
console.warn('手势上釉帧处理失败:', error);
}).finally(function() {
gestureGlazing.processingFrame = false;
});
}
gestureGlazing.frameId = requestAnimationFrame(gestureGlazingFrameLoop);
}

function onGestureGlazingResults(results) {
drawGestureGlazingSkeleton(results);
if (!gestureGlazing.active || !results.multiHandLandmarks || !results.multiHandLandmarks.length) {
if (!gestureGlazing.lastStrokeAt) setGestureGlazingStatus('请将食指移入画面，左右控制位置，上下控制高度。');
return;
}
var hand = results.multiHandLandmarks[0];
var contact = getGestureGlazingContact(hand);
if (!contact) {
setGestureGlazingStatus('让手部骨架触碰瓷器模型，触碰高度的一整圈会被上釉。');
return;
}
var now = performance.now();
if (now - gestureGlazing.lastStrokeAt < 90) return;
gestureGlazing.lastStrokeAt = now;
var bandIndex = Math.max(0, Math.min(31, Math.round(contact.level * 31)));
if (bandIndex === gestureGlazing.lastTouchedBand) return;
gestureGlazing.lastTouchedBand = bandIndex;
addGestureGlazeBand(bandIndex, getSelectedGlazeName());
setGestureGlazingStatus('正在上釉：第 ' + (bandIndex + 1) + ' 层横截面已完整覆盖。上下移动手部可继续覆盖其他高度。');
updateGestureGlazingModel();
var clearBtn = document.getElementById('gesture-glazing-clear');
if (clearBtn) clearBtn.disabled = false;
}

function getGestureGlazingContact(hand) {
var probeIndexes = [0, 5, 8, 9, 12, 13, 16, 17, 20];
var best = null;
for (var i = 0; i < probeIndexes.length; i++) {
var p = hand[probeIndexes[i]];
var x = 1 - p.x;
var y = p.y;
var level = Math.max(0, Math.min(1, 1 - y));
var modelHalfWidth = getGestureGlazingModelHalfWidth(level);
var distance = Math.abs(x - 0.5);
var inBody = distance <= modelHalfWidth;
var inCupHandle = gestureGlazing.shape === '茶杯'
&& level >= 0.28
&& level <= 0.82
&& x >= 0.5 + modelHalfWidth
&& x <= 0.5 + modelHalfWidth + 0.2;
if (inBody || inCupHandle) {
best = {level: level, distance: distance};
break;
}
}
return best;
}

function addGestureGlazeBand(bandIndex, glaze) {
for (var i = 0; i < gestureGlazeStrokes.length; i++) {
if (gestureGlazeStrokes[i].band === bandIndex) {
gestureGlazeStrokes[i].glaze = glaze;
return;
}
}
gestureGlazeStrokes.push({
band: bandIndex,
glaze: glaze
});
}

function resizeGestureGlazingSkeleton() {
var canvas = gestureGlazing.skeletonCanvas;
if (!canvas) return;
var stage = canvas.parentNode;
var width = stage ? stage.clientWidth : 320;
var height = stage ? stage.clientHeight : 220;
if (canvas.width !== width || canvas.height !== height) {
canvas.width = width;
canvas.height = height;
}
}

function clearGestureGlazingSkeleton() {
var canvas = gestureGlazing.skeletonCanvas;
var ctx = gestureGlazing.skeletonCtx;
if (!canvas || !ctx) return;
ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawGestureGlazingSkeleton(results) {
var canvas = gestureGlazing.skeletonCanvas;
var ctx = gestureGlazing.skeletonCtx;
if (!canvas || !ctx) return;
resizeGestureGlazingSkeleton();
clearGestureGlazingSkeleton();
drawGestureGlazingContactGuide(ctx, canvas);
var hands = results.multiHandLandmarks || [];
for (var h = 0; h < hands.length; h++) {
var hand = hands[h];
ctx.save();
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 3;
ctx.strokeStyle = '#7fb6c2';
ctx.fillStyle = '#eaf8f9';
for (var i = 0; i < gestureThrowing.handConnections.length; i++) {
var a = hand[gestureThrowing.handConnections[i][0]];
var b = hand[gestureThrowing.handConnections[i][1]];
ctx.beginPath();
ctx.moveTo((1 - a.x) * canvas.width, a.y * canvas.height);
ctx.lineTo((1 - b.x) * canvas.width, b.y * canvas.height);
ctx.stroke();
}
var tip = hand[8];
ctx.beginPath();
ctx.arc((1 - tip.x) * canvas.width, tip.y * canvas.height, 10, 0, Math.PI * 2);
ctx.fill();
ctx.strokeStyle = '#2f7180';
ctx.lineWidth = 2;
ctx.stroke();
ctx.restore();
}
}

function drawGestureGlazingContactGuide(ctx, canvas) {
ctx.save();
ctx.strokeStyle = 'rgba(47, 127, 143, 0.42)';
ctx.fillStyle = 'rgba(47, 127, 143, 0.08)';
ctx.lineWidth = 2;
ctx.beginPath();
for (var i = 0; i <= 40; i++) {
var level = i / 40;
var y = (1 - level) * canvas.height;
var half = getGestureGlazingModelHalfWidth(level) * canvas.width;
var x = canvas.width * 0.5 + half;
if (i === 0) ctx.moveTo(x, y);
else ctx.lineTo(x, y);
}
for (var j = 40; j >= 0; j--) {
var level2 = j / 40;
var y2 = (1 - level2) * canvas.height;
var half2 = getGestureGlazingModelHalfWidth(level2) * canvas.width;
ctx.lineTo(canvas.width * 0.5 - half2, y2);
}
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
}

function getGestureGlazingModelHalfWidth(level) {
var t = Math.max(0, Math.min(1, level));
var modelHalfWidth = 0.12 + Math.sin(t * Math.PI) * 0.18;
if (gestureGlazing.shape === '茶杯' && t >= 0.28 && t <= 0.82) modelHalfWidth += 0.16;
if (gestureGlazing.shape === '花瓶' || gestureGlazing.shape === '瓷罐') modelHalfWidth = 0.1 + Math.sin(t * Math.PI) * 0.16;
if (gestureGlazing.shape === '茶盘') modelHalfWidth = 0.36;
return modelHalfWidth;
}

function setGestureGlazingStatus(text) {
var status = gestureGlazing.statusEl || document.getElementById('gesture-glazing-status');
if (status) status.textContent = text;
}

function clearGestureGlazingStrokes() {
gestureGlazeStrokes = [];
updateGestureGlazingModel();
var clearBtn = document.getElementById('gesture-glazing-clear');
if (clearBtn) clearBtn.disabled = true;
setGestureGlazingStatus('釉迹已清除，可重新移动食指上釉。');
}

function finishGestureGlazing() {
cleanupGestureGlazing();
currentStep = 5;
renderStep(currentStep);
renderProgress();
showFeedback(true, '手势上釉已完成。后续预览和最终成品将保留你自主覆盖的釉面位置。');
}

function cancelGestureGlazing() {
cleanupGestureGlazing();
currentStep = 5;
renderStep(currentStep);
renderProgress();
}

function cleanupGestureGlazing() {
var hadGestureGlazingResources = gestureGlazing.active || gestureGlazing.renderer || gestureGlazing.stream || gestureGlazing.video || gestureGlazing.skeletonCanvas;
if (gestureGlazing.frameId) {
cancelAnimationFrame(gestureGlazing.frameId);
gestureGlazing.frameId = null;
}
if (gestureGlazing.stream) {
gestureGlazing.stream.getTracks().forEach(function(track) { track.stop(); });
gestureGlazing.stream = null;
}
if (gestureGlazing.video) {
gestureGlazing.video.pause();
gestureGlazing.video.srcObject = null;
gestureGlazing.video = null;
}
clearGestureGlazingSkeleton();
if (gestureGlazing.animationId) {
cancelAnimationFrame(gestureGlazing.animationId);
gestureGlazing.animationId = null;
}
if (gestureGlazing.resizeHandler) {
window.removeEventListener('resize', gestureGlazing.resizeHandler);
gestureGlazing.resizeHandler = null;
}
if (gestureGlazing.renderer) {
gestureGlazing.renderer.dispose();
if (gestureGlazing.renderer.domElement && gestureGlazing.renderer.domElement.parentNode) {
gestureGlazing.renderer.domElement.parentNode.removeChild(gestureGlazing.renderer.domElement);
}
}
gestureGlazing.active = false;
gestureGlazing.renderer = null;
gestureGlazing.scene = null;
gestureGlazing.camera = null;
gestureGlazing.model = null;
gestureGlazing.hands = null;
gestureGlazing.skeletonCanvas = null;
gestureGlazing.skeletonCtx = null;
gestureGlazing.processingFrame = false;
gestureGlazing.statusEl = null;
var container = document.getElementById('maker-step-container');
if (hadGestureGlazingResources && container) container.classList.remove('gesture-glazing-mode');
}

function cleanupGestureThrowing() {
if (gestureThrowing.frameId) {
cancelAnimationFrame(gestureThrowing.frameId);
gestureThrowing.frameId = null;
}
if (gestureThrowing.animationId) {
cancelAnimationFrame(gestureThrowing.animationId);
gestureThrowing.animationId = null;
}
if (gestureThrowing.resizeHandler) {
window.removeEventListener('resize', gestureThrowing.resizeHandler);
gestureThrowing.resizeHandler = null;
}
if (gestureThrowing.stream) {
gestureThrowing.stream.getTracks().forEach(function(track) { track.stop(); });
gestureThrowing.stream = null;
}
if (gestureThrowing.video) {
gestureThrowing.video.pause();
gestureThrowing.video.srcObject = null;
gestureThrowing.video = null;
}
clearGestureThrowingSkeleton();
if (gestureThrowing.renderer) {
gestureThrowing.renderer.dispose();
if (gestureThrowing.renderer.domElement && gestureThrowing.renderer.domElement.parentNode) {
gestureThrowing.renderer.domElement.parentNode.removeChild(gestureThrowing.renderer.domElement);
}
}
if (gestureThrowing.handlePreview && gestureThrowing.handlePreview.geometry) {
gestureThrowing.handlePreview.geometry.dispose();
}
gestureThrowing.active = false;
gestureThrowing.phase = 0;
gestureThrowing.renderer = null;
gestureThrowing.scene = null;
gestureThrowing.camera = null;
gestureThrowing.body = null;
gestureThrowing.wheel = null;
gestureThrowing.targetOutline = null;
gestureThrowing.handlePreview = null;
gestureThrowing.skeletonCanvas = null;
gestureThrowing.skeletonCtx = null;
gestureThrowing.hands = null;
gestureThrowing.phaseOneBaseProfile = null;
gestureThrowing.phaseTwoBaseProfile = null;
gestureThrowing.handlePath = null;
gestureThrowing.handleDrawing = false;
gestureThrowing.handleProgress = 0;
gestureThrowing.lastHandleGestureY = null;
gestureThrowing.lastHandleGesturePoint = null;
gestureThrowing.processingFrame = false;
gestureThrowing.lastFinger = null;
var container = document.getElementById('maker-step-container');
if (container) container.classList.remove('gesture-throwing-mode');
}

function cleanupPreview3D() {
if (preview3D.animationId) {
cancelAnimationFrame(preview3D.animationId);
preview3D.animationId = null;
}
if (preview3D.resizeHandler) {
window.removeEventListener('resize', preview3D.resizeHandler);
preview3D.resizeHandler = null;
}
if (preview3D.renderer) {
preview3D.renderer.dispose();
if (preview3D.renderer.domElement && preview3D.renderer.domElement.parentNode) {
preview3D.renderer.domElement.parentNode.removeChild(preview3D.renderer.domElement);
}
}
preview3D.renderer = null;
preview3D.scene = null;
preview3D.camera = null;
preview3D.model = null;
preview3D.isDragging = false;
preview3D.lastX = 0;
preview3D.lastY = 0;
}

function cleanupFinal3D() {
if (final3D.animationId) {
cancelAnimationFrame(final3D.animationId);
final3D.animationId = null;
}
if (final3D.resizeHandler) {
window.removeEventListener('resize', final3D.resizeHandler);
final3D.resizeHandler = null;
}
if (final3D.renderer) {
final3D.renderer.dispose();
if (final3D.renderer.domElement && final3D.renderer.domElement.parentNode) {
final3D.renderer.domElement.parentNode.removeChild(final3D.renderer.domElement);
}
}
final3D.renderer = null;
final3D.scene = null;
final3D.camera = null;
final3D.model = null;
final3D.isDragging = false;
final3D.lastX = 0;
final3D.lastY = 0;
}

function hexToNumber(hex) {
return parseInt(String(hex).replace('#', ''), 16);
}

function getProfilePoints(shapeClass, qualityType) {
var profiles = {
cup: [[0.42,0],[0.52,0.08],[0.62,0.42],[0.74,0.98],[0.8,1.18],[0.74,1.26]],
bowl: [[0.32,0],[0.72,0.08],[1.12,0.42],[1.34,0.78],[1.38,0.9],[1.26,0.98]],
vase: [[0.36,0],[0.58,0.12],[0.78,0.55],[0.64,1.08],[0.36,1.5],[0.34,1.86],[0.48,2.02],[0.42,2.12]],
plate: [[0.28,0],[1.2,0.03],[1.42,0.14],[1.55,0.22],[1.48,0.32],[0.46,0.3]],
brushpot: [[0.58,0],[0.68,0.06],[0.72,1.55],[0.7,1.72],[0.6,1.78]],
jar: [[0.42,0],[0.7,0.12],[0.9,0.55],[0.82,1.12],[0.52,1.42],[0.44,1.62],[0.58,1.74],[0.5,1.84]]
};
var src = profiles[shapeClass] || profiles.cup;
var wobble = qualityType === 'broken' ? 0.1 : (qualityType === 'flawed' ? 0.035 : 0);
return src.map(function(pair, index) {
var offset = wobble ? Math.sin(index * 1.7) * wobble : 0;
return new THREE.Vector2(Math.max(0.08, pair[0] + offset), pair[1]);
});
}

function getGestureProfilePoints(THREE, profile, qualityType) {
if (!profile || profile.length < 3) return null;
var minY = profile[0].y;
var maxY = profile[0].y;
var maxRadius = 0;
for (var i = 0; i < profile.length; i++) {
minY = Math.min(minY, profile[i].y);
maxY = Math.max(maxY, profile[i].y);
maxRadius = Math.max(maxRadius, getGestureOuterRadius(profile[i]));
}
var height = Math.max(0.1, maxY - minY);
var targetHeight = 1.55;
var scale = targetHeight / height;
var radiusScale = maxRadius > 0 ? Math.min(1.45 / maxRadius, scale * 1.08) : scale;
var wobble = qualityType === 'broken' ? 0.06 : (qualityType === 'flawed' ? 0.025 : 0);
return profile.map(function(p, index) {
var radius = getGestureOuterRadius(p);
var offset = wobble ? Math.sin(index * 1.7) * wobble : 0;
return new THREE.Vector2(Math.max(0.08, radius * radiusScale + offset), (p.y - minY) * scale);
});
}

function smoothProfilePoints(points, subdivisions) {
var smoothed = [];
for (var i = 0; i < points.length - 1; i++) {
var p0 = points[Math.max(0, i - 1)];
var p1 = points[i];
var p2 = points[i + 1];
var p3 = points[Math.min(points.length - 1, i + 2)];
for (var j = 0; j < subdivisions; j++) {
var t = j / subdivisions;
var t2 = t * t;
var t3 = t2 * t;
var x = 0.5 * ((2 * p1.x) + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3);
var y = 0.5 * ((2 * p1.y) + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3);
var minX = (i === 0 && j === 0) ? 0 : 0.06;
smoothed.push(new THREE.Vector2(Math.max(minX, x), y));
}
}
smoothed.push(points[points.length - 1].clone());
return smoothed;
}

function centerObject(object) {
var box = new THREE.Box3().setFromObject(object);
var center = box.getCenter(new THREE.Vector3());
var size = box.getSize(new THREE.Vector3());
object.position.x -= center.x;
object.position.z -= center.z;
object.position.y -= center.y;
var maxDim = Math.max(size.x, size.y, size.z);
if (maxDim > 0) {
object.scale.setScalar(2.25 / maxDim);
}
}

function addCrackLines(group, shapeClass, qualityType) {
if (qualityType === 'perfect') return;
var material = new THREE.LineBasicMaterial({
color: qualityType === 'broken' ? 0x5b4035 : 0x7d8d8f,
transparent: true,
opacity: qualityType === 'broken' ? 0.7 : 0.32
});
var count = qualityType === 'broken' ? 15 : 7;
var height = shapeClass === 'plate' ? 0.22 : 1.25;
for (var i = 0; i < count; i++) {
var angle = (Math.PI * 2 / count) * i;
var radius = shapeClass === 'plate' ? 0.92 : 0.7 + (i % 3) * 0.08;
var y = shapeClass === 'plate' ? 0.05 + (i % 3) * 0.05 : 0.22 + (i % 5) * height / 5;
var points = [];
for (var j = 0; j < 4; j++) {
var a = angle + Math.sin(j + i) * 0.08;
points.push(new THREE.Vector3(Math.cos(a) * radius, y + j * 0.12, Math.sin(a) * radius));
}
var geometry = new THREE.BufferGeometry().setFromPoints(points);
group.add(new THREE.Line(geometry, material));
}
}

function addSurfaceDecoration(group, shapeClass, glazeColor) {
if (shapeClass === 'plate') return;
var ringMaterial = new THREE.MeshBasicMaterial({
color: glazeColor > 0x444444 ? 0x315f7a : 0xd8e5ea,
transparent: true,
opacity: 0.38,
side: THREE.DoubleSide
});
var radii = shapeClass === 'vase' ? [0.5, 0.62, 0.72] : [0.55, 0.68];
for (var i = 0; i < radii.length; i++) {
var ring = new THREE.Mesh(new THREE.TorusGeometry(radii[i], 0.008, 16, 160), ringMaterial);
ring.rotation.x = Math.PI / 2;
ring.position.y = 0.35 + i * 0.34;
group.add(ring);
}
}

function getCupHandleModelPath(customHandlePath, profilePoints) {
var src = customHandlePath && customHandlePath.length >= 3 ? customHandlePath : getModelHandlePathFromProfilePoints(profilePoints);
var topWallRadius = getProfileRadiusAtY(profilePoints, src[0].y);
var bottomWallRadius = getProfileRadiusAtY(profilePoints, src[src.length - 1].y);
return src.map(function(p, index) {
if (index === 0) return {x: topWallRadius + 0.025, y: p.y};
if (index === src.length - 1) return {x: bottomWallRadius + 0.025, y: p.y};
return {x: p.x, y: p.y};
});
}

function addCupHandle(THREE, group, material, customHandlePath, profilePoints) {
var src = getCupHandleModelPath(customHandlePath, profilePoints);
var sideZ = 0.22;
var handleCurve = new THREE.CatmullRomCurve3(src.map(function(p) {
return new THREE.Vector3(p.x, p.y, sideZ);
}));
var handleGeometry = new THREE.TubeGeometry(handleCurve, 96, 0.045, 24, false);
handleGeometry.computeVertexNormals();
var handle = new THREE.Mesh(handleGeometry, material);
handle.castShadow = true;
handle.receiveShadow = true;
group.add(handle);

var lugGeometry = new THREE.SphereGeometry(0.085, 40, 24);
lugGeometry.computeVertexNormals();
var upperLug = new THREE.Mesh(lugGeometry, material);
upperLug.position.set(topWallRadius + 0.01, src[0].y, sideZ);
upperLug.scale.set(1.25, 0.78, 0.85);
upperLug.castShadow = true;
upperLug.receiveShadow = true;
group.add(upperLug);

var lowerLug = new THREE.Mesh(lugGeometry, material);
lowerLug.position.set(bottomWallRadius + 0.01, src[src.length - 1].y, sideZ);
lowerLug.scale.set(1.25, 0.78, 0.85);
lowerLug.castShadow = true;
lowerLug.receiveShadow = true;
group.add(lowerLug);
}

function addBottomCap(THREE, group, profilePoints, material) {
var bottom = profilePoints[0];
if (!bottom || bottom.x <= 0) return;
var capGeometry = new THREE.CircleGeometry(bottom.x, 192);
capGeometry.rotateX(Math.PI / 2);
capGeometry.translate(0, bottom.y, 0);
capGeometry.computeVertexNormals();
var cap = new THREE.Mesh(capGeometry, material);
cap.castShadow = true;
cap.receiveShadow = true;
group.add(cap);
}

function addBlueLotusTexture(THREE, group, shapeClass, options) {
if (!options || !options.enabled) return;
var loader = new THREE.TextureLoader();
var texture = loader.load(BLUE_LOTUS_TEXTURE);
texture.colorSpace = THREE.SRGBColorSpace || texture.colorSpace;
texture.anisotropy = 8;
var material = new THREE.MeshBasicMaterial({
map: texture,
transparent: true,
opacity: 0.94,
depthWrite: false,
side: THREE.DoubleSide
});
var widthMap = {cup: 1.18, bowl: 1.5, vase: 1.12, plate: 1.75, brushpot: 1.18, jar: 1.24};
var heightMap = {cup: 0.78, bowl: 0.78, vase: 0.98, plate: 0.76, brushpot: 1.0, jar: 0.92};
var radiusMap = {cup: 0.82, bowl: 1.28, vase: 0.82, plate: 1.28, brushpot: 0.78, jar: 0.92};
var scale = options.scale || 1;
var width = (widthMap[shapeClass] || 1.15) * scale;
var height = (heightMap[shapeClass] || 0.85) * scale;
var radius = radiusMap[shapeClass] || 0.9;
var geometry = new THREE.PlaneGeometry(width, height, 32, 12);
if (shapeClass !== 'plate') {
var pos = geometry.attributes.position;
for (var i = 0; i < pos.count; i++) {
var x = pos.getX(i);
var bend = x / Math.max(width, 0.001) * 0.72;
pos.setXYZ(i, Math.sin(bend) * radius, pos.getY(i), Math.cos(bend) * radius + 0.025);
}
geometry.computeVertexNormals();
} else {
geometry.rotateX(-Math.PI / 2);
}
var decal = new THREE.Mesh(geometry, material);
var angle = (options.angle || 0) * Math.PI / 180;
decal.position.y = (options.y || 0) / 100;
decal.rotation.y = angle;
if (shapeClass === 'plate') {
decal.position.y = 0.2;
decal.rotation.z = angle;
}
group.add(decal);
}

function getProfileRadiusAtY(profilePoints, y) {
if (!profilePoints || !profilePoints.length) return 0.75;
if (y <= profilePoints[0].y) return profilePoints[0].x;
for (var i = 1; i < profilePoints.length; i++) {
if (y <= profilePoints[i].y) {
var prev = profilePoints[i - 1];
var next = profilePoints[i];
var span = Math.max(0.001, next.y - prev.y);
var t = (y - prev.y) / span;
return prev.x + (next.x - prev.x) * t;
}
}
return profilePoints[profilePoints.length - 1].x;
}

function addGestureGlazeStrokes(THREE, group, shapeClass, glazeStrokes, profilePoints) {
if (!glazeStrokes || !glazeStrokes.length) return;
var minY = profilePoints && profilePoints.length ? profilePoints[0].y : 0;
var maxY = profilePoints && profilePoints.length ? profilePoints[profilePoints.length - 1].y : 1.2;
var height = Math.max(0.1, maxY - minY);
var bandCount = 32;
var bandHeight = height / bandCount;
for (var i = 0; i < glazeStrokes.length; i++) {
var stroke = glazeStrokes[i];
var color = hexToNumber(getGlazeColor(stroke.glaze || '白釉'));
var material = new THREE.MeshPhysicalMaterial({
color: color,
transparent: false,
opacity: 1,
roughness: 0.18,
metalness: 0,
clearcoat: 0.82,
clearcoatRoughness: 0.12,
side: THREE.DoubleSide,
depthWrite: true
});
var band = typeof stroke.band === 'number' ? stroke.band : Math.round(((stroke.y || 0) + 64) / 128 * (bandCount - 1));
band = Math.max(0, Math.min(bandCount - 1, band));
var y0 = minY + band * bandHeight;
var y1 = Math.min(maxY, y0 + bandHeight * 1.08);
var r0 = Math.max(0.08, getProfileRadiusAtY(profilePoints, y0) + 0.018);
var r1 = Math.max(0.08, getProfileRadiusAtY(profilePoints, y1) + 0.018);
var points = [
new THREE.Vector2(r0, y0),
new THREE.Vector2(r1, y1)
];
var geometry = new THREE.LatheGeometry(points, 192);
geometry.computeVertexNormals();
var ring = new THREE.Mesh(geometry, material);
group.add(ring);
}
}

function sampleHandlePath(points, samples) {
if (!points || points.length < 2) return [];
var route = [];
for (var i = 0; i < points.length - 1; i++) {
var a = points[i];
var b = points[i + 1];
for (var j = 0; j < samples; j++) {
var t = j / samples;
route.push({
x: a.x + (b.x - a.x) * t,
y: a.y + (b.y - a.y) * t
});
}
}
route.push(points[points.length - 1]);
return route;
}

function addGestureGlazeHandleStrokes(THREE, group, shapeClass, glazeStrokes, profilePoints, customHandlePath) {
if (shapeClass !== 'cup' || !glazeStrokes || !glazeStrokes.length) return;
var handlePath = sampleHandlePath(getCupHandleModelPath(customHandlePath, profilePoints), 18);
if (handlePath.length < 2) return;
var minY = profilePoints && profilePoints.length ? profilePoints[0].y : 0;
var maxY = profilePoints && profilePoints.length ? profilePoints[profilePoints.length - 1].y : 1.2;
var height = Math.max(0.1, maxY - minY);
var bandCount = 32;
var bandHeight = height / bandCount;
var sideZ = 0.22;
for (var i = 0; i < glazeStrokes.length; i++) {
var stroke = glazeStrokes[i];
var band = typeof stroke.band === 'number' ? stroke.band : Math.round(((stroke.y || 0) + 64) / 128 * (bandCount - 1));
band = Math.max(0, Math.min(bandCount - 1, band));
var y0 = minY + band * bandHeight - bandHeight * 0.08;
var y1 = Math.min(maxY, minY + (band + 1) * bandHeight + bandHeight * 0.12);
var segmentPoints = [];
for (var p = 0; p < handlePath.length; p++) {
if (handlePath[p].y >= y0 && handlePath[p].y <= y1) {
segmentPoints.push(new THREE.Vector3(handlePath[p].x, handlePath[p].y, sideZ));
}
}
if (segmentPoints.length < 2) continue;
var material = new THREE.MeshPhysicalMaterial({
color: hexToNumber(getGlazeColor(stroke.glaze || '白釉')),
roughness: 0.18,
metalness: 0,
clearcoat: 0.82,
clearcoatRoughness: 0.12,
side: THREE.DoubleSide,
depthWrite: true
});
var curve = new THREE.CatmullRomCurve3(segmentPoints);
var geometry = new THREE.TubeGeometry(curve, Math.max(8, segmentPoints.length * 2), 0.052, 24, false);
geometry.computeVertexNormals();
var glazeHandle = new THREE.Mesh(geometry, material);
group.add(glazeHandle);
}
}

function createPorcelainModel(THREE, shapeClass, result, glazeHex, patternOptions, customProfile, glazeStrokes, customHandlePath) {
var group = new THREE.Group();
var hasGestureGlaze = glazeStrokes && glazeStrokes.length;
var material = new THREE.MeshPhysicalMaterial({
color: hasGestureGlaze ? 0xd8c7ad : hexToNumber(glazeHex),
roughness: result.type === 'broken' ? 0.55 : 0.18,
metalness: 0,
clearcoat: hasGestureGlaze ? 0.28 : (result.type === 'broken' ? 0.15 : 0.85),
clearcoatRoughness: hasGestureGlaze ? 0.32 : (result.type === 'flawed' ? 0.24 : 0.1),
reflectivity: 0.55,
side: THREE.DoubleSide
});
var gestureLathePoints = getGestureLatheProfilePoints(THREE, customProfile);
var gestureOuterPoints = getGestureOuterProfilePoints(THREE, customProfile);
var profilePoints = gestureLathePoints || smoothProfilePoints(getProfilePoints(shapeClass, result.type), 8);
var outerProfilePoints = gestureOuterPoints || profilePoints;
var latheSegments = gestureLathePoints ? GESTURE_LATHE_SEGMENTS : 192;
var geometry = new THREE.LatheGeometry(profilePoints, latheSegments);
if (gestureLathePoints) {
var position = geometry.attributes.position;
for (var i = 0; i < position.count; i++) {
var x = position.getX(i);
var y = position.getY(i);
var z = position.getZ(i);
var n = Math.sin(y * 8.7 + Math.atan2(z, x) * 5.0) * 0.012;
position.setXYZ(i, x * (1 + n), y, z * (1 + n));
}
}
geometry.computeVertexNormals();
var body = new THREE.Mesh(geometry, material);
body.castShadow = true;
body.receiveShadow = true;
group.add(body);
if (!gestureLathePoints) addBottomCap(THREE, group, profilePoints, material);
if (shapeClass === 'cup') {
addCupHandle(THREE, group, material, customHandlePath, outerProfilePoints);
}
addBlueLotusTexture(THREE, group, shapeClass, patternOptions);
addSurfaceDecoration(group, shapeClass, hexToNumber(glazeHex));
addCrackLines(group, shapeClass, result.type);
centerObject(group);
addGestureGlazeStrokes(THREE, group, shapeClass, glazeStrokes, outerProfilePoints);
addGestureGlazeHandleStrokes(THREE, group, shapeClass, glazeStrokes, outerProfilePoints, customHandlePath);
return group;
}

function createClayLumpModel(THREE) {
var geometry = new THREE.SphereGeometry(0.92, 72, 48);
var position = geometry.attributes.position;
for (var i = 0; i < position.count; i++) {
var x = position.getX(i);
var y = position.getY(i);
var z = position.getZ(i);
var length = Math.sqrt(x * x + y * y + z * z) || 1;
var nx = x / length;
var ny = y / length;
var nz = z / length;
var wave =
Math.sin(nx * 5.1 + ny * 2.7) * 0.08 +
Math.cos(nz * 6.4 - nx * 1.8) * 0.06 +
Math.sin((nx + ny + nz) * 9.2) * 0.035;
var radius = 1 + wave;
position.setXYZ(i, x * radius, y * radius * 0.86, z * radius);
}
geometry.computeVertexNormals();
var material = new THREE.MeshStandardMaterial({
color: 0x8a6a4f,
roughness: 0.78,
metalness: 0,
flatShading: false
});
var lump = new THREE.Mesh(geometry, material);
lump.castShadow = true;
lump.receiveShadow = true;
var group = new THREE.Group();
group.add(lump);
return group;
}

function getPreviewState() {
var shape = selections[2] === null ? 'raw' : '茶杯';
var glaze = '白釉';
if (selections[2] !== null) {
var shapeOpt = STEP_DATA[2].options[selections[2]];
var shapeParts = shapeOpt.text.split(' + ');
shape = shapeParts.length > 2 ? shapeParts[1] : (shapeParts.length > 1 ? shapeParts[1] : '茶杯');
shape = shape.split(' ')[0];
}
if (selections[5] !== null) {
if (typeof selections[5] === 'object') {
var previewGlazeOpt = getGroupedOption(STEP_DATA[5], 'glaze', selections[5].glaze);
glaze = previewGlazeOpt ? previewGlazeOpt.text : glaze;
} else {
glaze = STEP_DATA[5].options[selections[5]].text.split(' + ')[0];
}
}
var score = calculateScore();
var quality = score >= 90 ? 'perfect' : (score >= 60 ? 'flawed' : 'broken');
return {
shape: shape,
glaze: glaze,
result: { type: quality },
pattern: hasBlueLotusPattern(),
customProfile: state.gestureThrowingProfile || null,
glazeStrokes: gestureGlazeStrokes
};
}

function updatePreviewModel() {
try {
if (!preview3D.scene || !window.THREE) {
initOrUpdatePreview3D();
return;
}
var previewState = getPreviewState();
if (preview3D.model) {
preview3D.scene.remove(preview3D.model);
}
if (previewState.shape === 'raw') {
preview3D.model = createClayLumpModel(window.THREE);
preview3D.model.scale.multiplyScalar(0.95);
} else {
var shapeClass = getShapeClassFromName(previewState.shape);
preview3D.model = createPorcelainModel(window.THREE, shapeClass, previewState.result, getGlazeColor(previewState.glaze), {
enabled: previewState.pattern,
angle: patternPlacement.angle,
y: patternPlacement.y,
scale: patternPlacement.scale
}, previewState.customProfile, previewState.glazeStrokes, state.gestureHandlePath);
preview3D.model.scale.multiplyScalar(0.78);
}
preview3D.scene.add(preview3D.model);
} catch (error) {
console.warn('制瓷预览更新失败:', error);
}
}

function initOrUpdatePreview3D() {
var viewport = document.getElementById('maker-live-preview');
var THREE = window.THREE;
if (!viewport || !THREE || typeof THREE.Scene !== 'function') return;
if (!preview3D.renderer) {
var width = viewport.clientWidth || 280;
var height = viewport.clientHeight || 320;
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xf8f3ea);
var camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
camera.position.set(0, 0.55, 5.2);
camera.lookAt(0, 0, 0);
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(width, height);
viewport.appendChild(renderer.domElement);
scene.add(new THREE.AmbientLight(0xffffff, 0.74));
var key = new THREE.DirectionalLight(0xffffff, 1.05);
key.position.set(4, 5, 4);
scene.add(key);
var fill = new THREE.DirectionalLight(0xb8d8ff, 0.38);
fill.position.set(-4, 2, -3);
scene.add(fill);
var base = new THREE.Mesh(
new THREE.CylinderGeometry(1.35, 1.35, 0.05, 160),
new THREE.MeshStandardMaterial({color:0xd6c4a7, roughness:0.5})
);
base.position.y = -1.25;
scene.add(base);
preview3D.renderer = renderer;
preview3D.scene = scene;
preview3D.camera = camera;
preview3D.resizeHandler = function() {
var nextViewport = document.getElementById('maker-live-preview');
if (!nextViewport || !preview3D.renderer || !preview3D.camera) return;
var w = nextViewport.clientWidth || 280;
var h = nextViewport.clientHeight || 320;
preview3D.camera.aspect = w / h;
preview3D.camera.updateProjectionMatrix();
preview3D.renderer.setSize(w, h);
};
window.addEventListener('resize', preview3D.resizeHandler);
viewport.addEventListener('pointerdown', function(e) {
preview3D.isDragging = true;
preview3D.lastX = e.clientX;
preview3D.lastY = e.clientY;
viewport.setPointerCapture(e.pointerId);
});
viewport.addEventListener('pointermove', function(e) {
if (!preview3D.isDragging || !preview3D.model) return;
var dx = e.clientX - preview3D.lastX;
var dy = e.clientY - preview3D.lastY;
preview3D.model.rotation.y += dx * 0.01;
preview3D.model.rotation.x = Math.max(-1.1, Math.min(1.1, preview3D.model.rotation.x + dy * 0.01));
preview3D.lastX = e.clientX;
preview3D.lastY = e.clientY;
});
viewport.addEventListener('pointerup', function() {
preview3D.isDragging = false;
});
viewport.addEventListener('pointercancel', function() {
preview3D.isDragging = false;
});
viewport.addEventListener('pointerleave', function() {
preview3D.isDragging = false;
});
function animate() {
preview3D.animationId = requestAnimationFrame(animate);
renderer.render(scene, camera);
}
animate();
}
updatePreviewModel();
}

function initFinal3D(container, shapeClass, result, customProfile) {
cleanupFinal3D();
var THREE = window.THREE;
if (!THREE || typeof THREE.Scene !== 'function') {
container.innerHTML = '<div class="model-fallback">3D 引擎未加载，请检查 libs/three.min.js</div>';
return;
}
var viewport = container.querySelector('.final-model-viewport');
if (!viewport) return;
var width = viewport.clientWidth || 360;
var height = viewport.clientHeight || 360;
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xf7f3ed);
var camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
camera.position.set(0, 0.65, 4.2);
camera.lookAt(0, 0, 0);
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(width, height);
renderer.shadowMap.enabled = true;
viewport.appendChild(renderer.domElement);
var ambient = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambient);
var key = new THREE.DirectionalLight(0xffffff, 1.1);
key.position.set(4, 6, 5);
key.castShadow = true;
scene.add(key);
var fill = new THREE.DirectionalLight(0xb8d8ff, 0.45);
fill.position.set(-5, 2, -4);
scene.add(fill);
var base = new THREE.Mesh(
new THREE.CylinderGeometry(1.45, 1.45, 0.06, 160),
new THREE.MeshStandardMaterial({color:0xd8c7ad, roughness:0.48})
);
base.position.y = -1.28;
base.receiveShadow = true;
scene.add(base);
var model = createPorcelainModel(THREE, shapeClass, result, getGlazeColor(state.glaze), {
enabled: state.hasBlueLotusPattern,
angle: state.patternPlacement ? state.patternPlacement.angle : 0,
y: state.patternPlacement ? state.patternPlacement.y : 0,
scale: state.patternPlacement ? state.patternPlacement.scale : 1
}, customProfile, state.gestureGlazeStrokes, state.gestureHandlePath);
scene.add(model);
final3D.renderer = renderer;
final3D.scene = scene;
final3D.camera = camera;
final3D.model = model;
function resize() {
if (!final3D.renderer || !final3D.camera) return;
var w = viewport.clientWidth || 360;
var h = viewport.clientHeight || 360;
final3D.camera.aspect = w / h;
final3D.camera.updateProjectionMatrix();
final3D.renderer.setSize(w, h);
}
final3D.resizeHandler = resize;
window.addEventListener('resize', resize);
viewport.addEventListener('pointerdown', function(e) {
final3D.isDragging = true;
final3D.lastX = e.clientX;
final3D.lastY = e.clientY;
viewport.setPointerCapture(e.pointerId);
});
viewport.addEventListener('pointermove', function(e) {
if (!final3D.isDragging || !final3D.model) return;
var dx = e.clientX - final3D.lastX;
var dy = e.clientY - final3D.lastY;
final3D.model.rotation.y += dx * 0.01;
final3D.model.rotation.x = Math.max(-1.1, Math.min(1.1, final3D.model.rotation.x + dy * 0.01));
final3D.lastX = e.clientX;
final3D.lastY = e.clientY;
});
viewport.addEventListener('pointerup', function() {
final3D.isDragging = false;
});
viewport.addEventListener('pointercancel', function() {
final3D.isDragging = false;
});
viewport.addEventListener('pointerleave', function() {
final3D.isDragging = false;
});
function animate() {
final3D.animationId = requestAnimationFrame(animate);
renderer.render(scene, camera);
}
animate();
}

function renderFinalResult() {
var result = determineResult();
var score = calculateScore();
var shapeClass = getShapeClassFromName(state.shape);
var visual = document.getElementById('maker-final-visual');
var html = '<div class="final-model-viewport" aria-label="自定义瓷器3D模型"></div>';
html += '<div class="result-label ' + result.type + '">' + result.label + '</div>';
html += '<p class="final-score">综合得分：' + score + ' / 100</p>';
html += '<p class="final-model-hint">拖动模型可旋转查看</p>';
visual.innerHTML = html;
initFinal3D(visual, shapeClass, result, state.gestureThrowingProfile);
var report = document.getElementById('maker-final-report');
var rHtml = '<div class="report-title">《瓷器工艺学习报告》</div>';
for (var i = 0; i < STEP_DATA.length; i++) {
var sel = selections[i];
var opt = sel !== null && !STEP_DATA[i].choiceGroups ? STEP_DATA[i].options[sel] : null;
var isCorrect = opt ? opt.correct : false;
var choiceText = opt ? opt.text : '未选择';
if (STEP_DATA[i].choiceGroups) {
choiceText = isStepSelectionComplete(i) ? getGroupedSelectionText(i) : '未选择完整';
isCorrect = isStepSelectionComplete(i);
}
if (i === 1 && opt) {
var prevOpt = selections[0] !== null ? STEP_DATA[0].options[selections[0]] : null;
var clay = prevOpt ? prevOpt.text.split(' + ')[0] : '';
if ((clay === '粗陶土' || clay === '紫砂泥') && opt.text.indexOf('花瓶') !== -1 && opt.text.indexOf('粗陶土') === -1) isCorrect = false;
}
if (i === 7 && opt) {
var clayOpt = selections[0] !== null ? STEP_DATA[0].options[selections[0]] : null;
var glazeOpt = selections[5] && typeof selections[5] === 'object' ? getGroupedOption(STEP_DATA[5], 'glaze', selections[5].glaze) : (selections[5] !== null ? STEP_DATA[5].options[selections[5]] : null);
var clay = clayOpt ? clayOpt.text.split(' + ')[0] : '';
var glaze = glazeOpt ? glazeOpt.text.split(' + ')[0] : '';
var isQingci = (clay === '青瓷土' || glaze === '青釉' || glaze === '天青釉' || glaze === '粉青釉');
if (isQingci && opt.text.indexOf('还原烧制') === -1) isCorrect = false;
}
var tagClass = isCorrect ? 'correct' : 'wrong';
var tagText = isCorrect ? '规范' : '有误';
rHtml += '<div class="report-item">';
rHtml += '<span class="report-step-name">' + STEP_DATA[i].title + '</span>';
rHtml += '<span class="report-choice">' + choiceText + '</span>';
rHtml += '<span class="report-tag ' + tagClass + '">' + tagText + '</span>';
rHtml += '</div>';
if (BLUE_LOTUS_TEXTURE_FEATURE_ENABLED && i === 5 && opt && opt.text === '手绘青花 + 缠枝莲') {
var textureText = blueLotusTextureEnabled
? ('已贴图：左右 ' + patternPlacement.angle + '°，上下 ' + patternPlacement.y + '，大小 ' + Math.round(patternPlacement.scale * 100) + '%')
: '未贴图：仅保留手绘青花缠枝莲工艺选择';
rHtml += '<div class="report-item pattern-report-item">';
rHtml += '<span class="report-step-name">贴图设置</span>';
rHtml += '<span class="report-choice">' + textureText + '</span>';
rHtml += '<span class="report-tag correct">自选</span>';
rHtml += '</div>';
}
}
rHtml += '<div class="report-summary">';
rHtml += '<p>' + result.desc + '</p>';
rHtml += '<p style="margin-top:8px;color:#888;font-size:13px;">';
if (result.type === 'perfect') {
rHtml += '恭喜！您掌握了全部核心制瓷工艺，从选料到成瓷每一步都精准到位。';
} else if (result.type === 'flawed') {
rHtml += '建议回顾存在问题的工序，特别注意练泥排气、装匣间隙和窑烧气氛的把控。';
} else {
rHtml += '强烈建议重新学习制瓷基础知识，重点掌握采石除杂、练泥排气、窑烧控温三大核心工序。';
}
rHtml += '</p></div>';
report.innerHTML = rHtml;
}

function showKnowledgeBase() {
var kb = document.getElementById('maker-knowledge-base');
var content = document.getElementById('maker-kb-content');
var knowledges = [
{title:'采石工序',text:'采石要选择风化适中的瓷石、高岭土、长石和石英等原料，粗碎后去除铁质杂质，并通过自然风化改善后续制泥条件。'},
{title:'练泥工序',text:'练泥通过沉淀、压滤、揉踩、真空练泥和陈腐排出气泡、均化泥料，使泥料获得适合拉坯的粘结性与可塑性。'},
{title:'拉坯工序',text:'拉坯要先定中心，再开孔、提泥、扩宽，并保持适度补水；器壁厚薄和重心稳定决定成型质量。'},
{title:'修坯工序',text:'修坯应在皮革硬度时进行，先修底足再修器身，从下往上逐段修薄，控制圈足、平底和器壁厚度。'},
{title:'绘画工序',text:'绘画常用青花料、釉下彩等，以毛笔勾线、分水、渲染；需先淡后浓并自然阴干，避免水分过多或暴晒。'},
{title:'上釉工序',text:'上釉让坯体覆盖玻璃质釉浆，常见方法有浸釉、荡釉、喷釉、浇釉等，关键是釉浆比重、釉层厚薄和底部擦釉。'},
{title:'装匣工序',text:'装匣用匣钵保护器物免受落渣和火焰直冲，需垫氧化铝粉、糠灰或垫饼，留足间隙并保证匣钵柱稳定。'},
{title:'窑烧工序',text:'窑烧分低温排水、中温转气氛、高温保温和缓慢冷却等阶段，常见烧成温度约1200-1350℃，需按瓷种控制氧化焰或还原焰。'}
];
var html = '';
for (var i = 0; i < knowledges.length; i++) {
html += '<div class="kb-item"><h4>' + knowledges[i].title + '</h4><p>' + knowledges[i].text + '</p></div>';
}
content.innerHTML = html;
kb.classList.add('show');
document.getElementById('maker-kb-close').onclick = function() {
kb.classList.remove('show');
};
}

function restartMaker() {
initMaker();
}

document.addEventListener('DOMContentLoaded', function() {
var exitBtn = document.getElementById('maker-exit');
if (exitBtn) {
exitBtn.addEventListener('click', function() {
cleanupGestureGlazing();
cleanupPreview3D();
cleanupFinal3D();
document.getElementById('porcelain-maker').classList.remove('active');
document.getElementById('main-content').style.display = '';
});
}
var restartBtn = document.getElementById('maker-restart');
if (restartBtn) {
restartBtn.addEventListener('click', restartMaker);
}
var kbBtn = document.getElementById('maker-knowledge-btn');
if (kbBtn) {
kbBtn.addEventListener('click', showKnowledgeBase);
}
});

window.initPorcelainMaker = initMaker;
})();

