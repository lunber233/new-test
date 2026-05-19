(function() {
'use strict';

var STEP_DATA = [
{
title: '选料揉泥',
desc: '制瓷首道关键工序，泥料与揉泥方式直接影响坯体质量。',
question: '请选择泥料与揉泥工艺：',
options: [
{text:'高岭土 + 菊花揉',correct:true,effect:10,knowledge:'揉泥核心目的为排出泥料气泡，防止烧制开裂。高岭土白度高、可塑性强，是制作白瓷的上乘原料。古法菊花揉需反复按压5-10分钟，使泥料均匀细腻。',warning:''},
{text:'高岭土 + 羊角揉',correct:true,effect:9,knowledge:'羊角揉为新手简易揉泥法，虽不及菊花揉细腻，但同样能有效排出大部分气泡，适合初学者制作日常瓷器。',warning:''},
{text:'紫砂泥 + 菊花揉',correct:true,effect:10,knowledge:'紫砂泥含铁量高，烧成后呈紫红色，透气性极佳，是制作紫砂壶的专用泥料。搭配标准揉泥法，成品质量可靠。',warning:''},
{text:'青瓷土 + 羊角揉',correct:true,effect:9,knowledge:'青瓷土富含石英与长石，高温下可形成青釉质感。搭配简易揉泥法，虽略逊专业标准，仍可制作合格青瓷。',warning:''},
{text:'粗陶土 + 菊花揉',correct:true,effect:10,knowledge:'粗陶土颗粒较粗，透气性好，适合制作民俗粗瓷。标准揉泥能有效改善其可塑性，减少烧制开裂风险。',warning:''},
{text:'随意揉（任意泥料）',correct:false,effect:2,knowledge:'',warning:'操作不规范！未充分揉泥会导致坯体内部存气，高温烧制后会出现炸裂瑕疵。无论选择何种泥料，揉泥工序都不可敷衍。'}
]
},
{
title: '器型塑形',
desc: '成型核心工序，器型与塑形方式的选择决定了瓷器的基本形态。',
question: '请选择塑形方式与器型：',
options: [
{text:'手工拉坯 + 茶杯',correct:true,effect:10,knowledge:'拉坯为千年古法成型工艺，依靠手部力度控制器型弧度，是手工瓷器独一无二的核心特色。茶杯小巧玲珑，适合初学者练习拉坯技法。',warning:''},
{text:'手工拉坯 + 碗',correct:true,effect:10,knowledge:'碗为日常器型，拉坯成型时需控制好口沿弧度与底足厚度，是检验拉坯基本功的标准器型。',warning:''},
{text:'手工拉坯 + 花瓶',correct:true,effect:10,knowledge:'花瓶造型高挑优美，拉坯时需保持器身厚薄均匀，口沿与底足比例协调，是拉坯技艺的进阶考验。',warning:''},
{text:'模具成型 + 茶盘',correct:true,effect:9,knowledge:'模具成型是现代工艺，可保证器型规整统一。茶盘扁平面积大，模具成型效率更高，适合批量制作。',warning:''},
{text:'模具成型 + 笔筒',correct:true,effect:9,knowledge:'笔筒为直筒造型，模具成型可确保圆度精准、壁厚均匀，是现代制瓷的常用方式。',warning:''},
{text:'模具成型 + 瓷罐',correct:true,effect:9,knowledge:'瓷罐造型敦实，模具成型能精确控制罐口与罐身的比例，适合制作密封性要求高的容器。',warning:''},
{text:'手工拉坯 + 花瓶 + 粗陶土',correct:false,effect:3,knowledge:'',warning:'粗陶土颗粒粗、可塑性差，不适合制作精细花瓶。强行拉坯会导致器壁厚薄不均、表面粗糙，烧成后极易变形开裂。'}
]
},
{
title: '修坯整形',
desc: '精细打磨工序，修坯决定瓷器器型规整度与美观程度。',
question: '请选择修坯部位与程度：',
options: [
{text:'整体精修（专业级）',correct:true,effect:10,knowledge:'修坯决定瓷器器型规整度，是成品美观的关键工序。整体精修可使器身线条流畅、口沿光滑、底足平整，达到专业级标准。',warning:''},
{text:'口沿修整 + 精修',correct:true,effect:9,knowledge:'口沿是瓷器使用时最先接触的部位，精修口沿可使唇感舒适、外观精致，是修坯的基础要求。',warning:''},
{text:'器身打磨 + 精修',correct:true,effect:9,knowledge:'器身打磨需保持曲面顺滑，无凹凸起伏。精修后器壁厚薄均匀，既美观又利于后续上釉。',warning:''},
{text:'底部修平 + 精修',correct:true,effect:9,knowledge:'底足修平关系到瓷器的放置稳定性，精修底足可使瓷器平稳立于桌面，且底足无釉处呈现整洁的铁黑色。',warning:''},
{text:'整体精修 + 过度打磨',correct:false,effect:3,knowledge:'',warning:'打磨过薄会导致坯体易碎，烧制中极易变形破损。修坯需适可而止，保持器壁厚度在2-4mm之间。'}
]
},
{
title: '晾干控干',
desc: '坯体预处理工序，晾干方式直接影响坯体结构的稳定性。',
question: '请选择晾干环境与时长：',
options: [
{text:'阴凉通风 + 自然阴干24h',correct:true,effect:10,knowledge:'湿坯严禁暴晒，快速脱水会造成坯体干裂。传统制瓷需自然阴干至含水率低于5%，阴凉通风环境可使水分匀速蒸发，保持坯体结构完整。',warning:''},
{text:'阴凉通风 + 超时长阴干72h',correct:true,effect:8,knowledge:'超长阴干虽能确保坯体完全干燥，但耗时过长且无额外增益，24h标准阴干已能满足大多数坯体需求。',warning:''},
{text:'阴凉通风 + 快速风干2h',correct:false,effect:4,knowledge:'',warning:'快速风干2h远远不够！坯体内部水分未充分排出，素烧时内部蒸汽会导致坯体炸裂。阴干时间不可压缩。'},
{text:'阳光暴晒 + 任意时长',correct:false,effect:2,knowledge:'',warning:'阳光暴晒是制瓷大忌！极速温差会导致坯体表面与内部收缩不均，产生严重开裂甚至破碎。'},
{text:'密闭潮湿 + 任意时长',correct:false,effect:2,knowledge:'',warning:'密闭潮湿环境会使坯体发霉、滋生细菌，且水分无法蒸发，根本无法进入下一步工序。'}
]
},
{
title: '素烧打底',
desc: '第一次烧制，低温固化坯体结构，为后续绘瓷、上釉提供基础。',
question: '请选择素烧温度与时长：',
options: [
{text:'800℃ + 4小时标准烧制',correct:true,effect:10,knowledge:'低温素烧固化坯体结构，提升坯体硬度，为后续绘瓷、上釉提供基础，是精细瓷器制作的必备工序。800℃为标准低温素烧温度。',warning:''},
{text:'800℃ + 8小时久烧',correct:true,effect:8,knowledge:'久烧能使坯体更加致密，但会增加能耗与时间成本。4小时标准烧制已能满足大多数坯体需求。',warning:''},
{text:'600℃ + 4小时',correct:false,effect:4,knowledge:'',warning:'温度不足！600℃无法使坯体充分硬化，坯体松软易塌，后续绘瓷、上釉时极易破损。'},
{text:'1000℃ + 4小时',correct:false,effect:3,knowledge:'',warning:'温度过高！1000℃会使坯体提前瓷化，表面过于致密光滑，导致后续釉料无法附着，上釉失败。'},
{text:'800℃ + 2小时速成',correct:false,effect:5,knowledge:'',warning:'时间不足！2小时速成素烧坯体内部未充分固化，硬度不够，后续工序中易碎裂。'}
]
},
{
title: '纹饰绘制',
desc: '装饰工序，在素烧后的坯体上绘制图案或雕刻纹饰。',
question: '请选择绘画工艺与纹饰素材：',
options: [
{text:'手绘青花 + 缠枝莲',correct:true,effect:10,knowledge:'青花为釉下彩工艺，以氧化钴为呈色剂，白地蓝花，清新雅致。缠枝莲纹起源于唐代，寓意生生不息，是经典的传统纹饰。',warning:''},
{text:'釉里红彩绘 + 山水',correct:true,effect:10,knowledge:'釉里红以氧化铜为呈色剂，烧成后呈红色，与青花并称"青花釉里红"。山水纹饰讲究意境，是中国文人瓷器的代表风格。',warning:''},
{text:'雕刻纹饰 + 花鸟',correct:true,effect:10,knowledge:'雕刻纹饰分为刻花、划花、印花，通过刀具在坯体上雕刻出凹凸图案。花鸟纹生动自然，是宋代定窑的经典装饰技法。',warning:''},
{text:'留白素瓷 + 极简素纹',correct:true,effect:10,knowledge:'留白素瓷追求"大道至简"的审美，不着一色而尽显胎釉本色之美。极简素纹仅以细微线条点缀，是宋瓷"极简美学"的极致体现。',warning:''},
{text:'手绘青花 + 祥云',correct:true,effect:10,knowledge:'祥云纹源于商周时期的云雷纹，寓意吉祥如意。与青花工艺结合，蓝白相间，飘逸灵动，是明清官窑的常用纹饰。',warning:''},
{text:'雕刻纹饰 + 古风书法',correct:true,effect:10,knowledge:'在瓷胎上雕刻书法文字，需刀法精准、力度均匀。古风书法与瓷器结合，既有实用价值，又具文人雅趣。',warning:''}
]
},
{
title: '釉料选择与上釉',
desc: '核心美化防护工序，釉料决定瓷器防水、耐磨、美观特性。',
question: '请选择釉料种类与上釉方式：',
options: [
{text:'透明釉 + 蘸釉',correct:true,effect:10,knowledge:'透明釉能清晰展现胎体与纹饰本色，是白瓷、青花的经典搭配。蘸釉适用于小件器物，釉层均匀、操作简便。',warning:''},
{text:'青釉 + 荡釉',correct:true,effect:10,knowledge:'青釉以铁为呈色剂，高温还原下呈现如玉般的青绿色。荡釉适用于中空器物（如花瓶、笔筒），釉液在器内回荡形成均匀釉层。',warning:''},
{text:'白釉 + 蘸釉',correct:true,effect:10,knowledge:'白釉釉色牙白莹润，是定窑的代表釉色。蘸釉方式可使茶杯、碗具等小件器物釉层均匀覆盖，美观实用。',warning:''},
{text:'霁蓝釉 + 刷釉',correct:true,effect:10,knowledge:'霁蓝釉色泽深沉如夜空，是高温颜色釉中的名贵品种。刷釉适用于平面或局部上釉，可精确控制釉层厚度与范围。',warning:''},
{text:'仿古酱釉 + 刷釉',correct:true,effect:10,knowledge:'仿古酱釉呈深褐色，古朴典雅，常用于仿古瓷器。刷釉能精准控制上釉区域，适合制作局部釉色的艺术效果。',warning:''},
{text:'胭脂红釉 + 淋釉',correct:false,effect:3,knowledge:'',warning:'淋釉会导致釉层厚薄不均，成品出现流釉瑕疵。胭脂红釉为低温颜色釉，需精准控制釉层厚度，刷釉或蘸釉更为适宜。'}
]
},
{
title: '二次高温烧制',
desc: '成瓷工序，温度与烧制氛围决定瓷器胎质、釉色、质感。',
question: '请选择成瓷温度与烧制氛围：',
options: [
{text:'1280℃ + 氧化烧制',correct:true,effect:10,knowledge:'1280℃为白瓷与青花瓷的标准成瓷温度，氧化氛围下釉色稳定明亮，胎体坚硬致密，是现代常规烧制方式。',warning:''},
{text:'1320℃ + 还原烧制',correct:true,effect:10,knowledge:'1320℃高温配合还原氛围，是古法青瓷的专属烧制参数。还原气氛下铁元素呈青绿色，方能呈现如玉般的青釉质感。',warning:''},
{text:'1280℃ + 还原烧制',correct:true,effect:9,knowledge:'1280℃配合还原氛围可用于部分青瓷品种，但温度略低可能导致釉色不够深沉，胎质略逊于1320℃高温烧成。',warning:''},
{text:'1100℃ + 氧化烧制',correct:false,effect:3,knowledge:'',warning:'温度过低！1100℃无法使釉面充分熔融，釉面无光、胎体不坚硬，成瓷质量极差，属于残次品烧制参数。'},
{text:'1320℃ + 氧化烧制',correct:false,effect:4,knowledge:'',warning:'氛围错误！1320℃高温下若使用氧化氛围，青瓷釉中的铁元素无法呈现青绿色，釉色会偏黄褐，完全失去青瓷应有的美感。'},
{text:'1100℃ + 还原烧制',correct:false,effect:2,knowledge:'',warning:'温度与氛围双错！1100℃过低无法成瓷，即使还原氛围也无法挽救。成品釉面粗糙、胎体酥松，毫无使用价值。'}
]
}
];

var currentStep = 0;
var selections = [];
var state = {};

function initMaker() {
currentStep = 0;
selections = new Array(STEP_DATA.length).fill(null);
state = {};
document.getElementById('maker-final').classList.remove('show');
document.getElementById('maker-step-container').classList.add('show');
renderStep(0);
renderProgress();
}

function renderStep(index) {
var container = document.getElementById('maker-step-container');
var step = STEP_DATA[index];
var html = '<div class="step-title">' + step.title + '</div>';
html += '<div class="step-desc">' + step.desc + '</div>';
html += '<div class="step-question">' + step.question + '</div>';
html += '<div class="maker-options">';
for (var i = 0; i < step.options.length; i++) {
var cls = selections[index] === i ? 'maker-option selected' : 'maker-option';
html += '<div class="' + cls + '" data-idx="' + i + '">' + step.options[i].text + '</div>';
}
html += '</div>';
html += '<div class="maker-nav">';
html += '<button id="maker-prev"' + (index === 0 ? ' disabled' : '') + '>上一步</button>';
html += '<button id="maker-next"' + (selections[index] === null ? ' disabled' : '') + '>' + (index === STEP_DATA.length - 1 ? '完成制作' : '下一步') + '</button>';
html += '</div>';
container.innerHTML = html;
var opts = container.querySelectorAll('.maker-option');
for (var j = 0; j < opts.length; j++) {
opts[j].addEventListener('click', onOptionClick);
}
document.getElementById('maker-prev').addEventListener('click', prevStep);
document.getElementById('maker-next').addEventListener('click', nextStep);
}

function onOptionClick() {
var idx = parseInt(this.getAttribute('data-idx'));
selectOption(currentStep, idx);
}

function selectOption(stepIndex, optionIndex) {
var step = STEP_DATA[stepIndex];
var opt = step.options[optionIndex];
var isCorrect = opt.correct;
if (stepIndex === 1) {
var prevOpt = selections[0] !== null ? STEP_DATA[0].options[selections[0]] : null;
var clay = prevOpt ? prevOpt.text.split(' + ')[0] : '';
if (clay === '粗陶土' && opt.text.indexOf('花瓶') !== -1 && opt.text.indexOf('粗陶土') === -1) {
isCorrect = false;
}
}
if (stepIndex === 7) {
var clayOpt = selections[0] !== null ? STEP_DATA[0].options[selections[0]] : null;
var glazeOpt = selections[6] !== null ? STEP_DATA[6].options[selections[6]] : null;
var clay = clayOpt ? clayOpt.text.split(' + ')[0] : '';
var glaze = glazeOpt ? glazeOpt.text.split(' + ')[0] : '';
var isQingci = (clay === '青瓷土' || glaze === '青釉');
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
if (isCorrect) {
showFeedback(true, opt.knowledge);
} else {
var warning = opt.warning;
if (stepIndex === 1 && !opt.warning) {
warning = '粗陶土颗粒粗、可塑性差，不适合制作精细花瓶。强行拉坯会导致器壁厚薄不均、表面粗糙，烧成后极易变形开裂。';
}
if (stepIndex === 7 && !opt.warning) {
warning = '青瓷必须选择还原烧制！氧化氛围下铁元素无法呈现青绿色，釉色会偏黄褐，完全失去青瓷应有的如玉质感。';
}
showFeedback(false, warning);
}
}

function showFeedback(isCorrect, text) {
var fb = document.getElementById('maker-feedback');
var icon = document.getElementById('maker-feedback-icon');
var content = document.getElementById('maker-feedback-content');
icon.textContent = isCorrect ? '\u2713' : '\u2717';
content.textContent = text;
fb.className = isCorrect ? 'show' : 'show error';
document.getElementById('maker-feedback-close').onclick = function() {
fb.classList.remove('show', 'error');
};
}

function nextStep() {
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
document.getElementById('maker-step-container').classList.remove('show');
document.getElementById('maker-final').classList.add('show');
buildState();
renderFinalResult();
}

function buildState() {
var opt0 = selections[0] !== null ? STEP_DATA[0].options[selections[0]] : null;
state.clay = opt0 ? opt0.text.split(' + ')[0] : '高岭土';
var opt1 = selections[1] !== null ? STEP_DATA[1].options[selections[1]] : null;
var parts1 = opt1 ? opt1.text.split(' + ') : ['手工拉坯', '茶杯'];
state.forming = parts1[0];
state.shape = parts1.length > 2 ? parts1[1] : (parts1.length > 1 ? parts1[1] : '茶杯');
state.shape = state.shape.split(' ')[0];
var opt3 = selections[3] !== null ? STEP_DATA[3].options[selections[3]] : null;
state.dryEnv = opt3 ? opt3.text.split(' + ')[0] : '阴凉通风';
var opt6 = selections[6] !== null ? STEP_DATA[6].options[selections[6]] : null;
state.glaze = opt6 ? opt6.text.split(' + ')[0] : '透明釉';
var opt7 = selections[7] !== null ? STEP_DATA[7].options[selections[7]] : null;
var parts7 = opt7 ? opt7.text.split(' + ') : ['1280\u2103', '\u6c27\u5316\u70e7\u5236'];
state.fireTemp = parts7[0];
state.fireAtmosphere = parts7.length > 1 ? parts7[1] : '\u6c27\u5316\u70e7\u5236';
}

function calculateScore() {
var score = 0;
for (var i = 0; i < STEP_DATA.length; i++) {
if (selections[i] !== null) {
var opt = STEP_DATA[i].options[selections[i]];
var eff = opt.effect;
if (i === 1) {
var prevOpt = selections[0] !== null ? STEP_DATA[0].options[selections[0]] : null;
var clay = prevOpt ? prevOpt.text.split(' + ')[0] : '';
if (clay === '粗陶土' && opt.text.indexOf('花瓶') !== -1 && opt.text.indexOf('粗陶土') === -1) {
eff = 3;
}
}
if (i === 7) {
var clayOpt = selections[0] !== null ? STEP_DATA[0].options[selections[0]] : null;
var glazeOpt = selections[6] !== null ? STEP_DATA[6].options[selections[6]] : null;
var clay = clayOpt ? clayOpt.text.split(' + ')[0] : '';
var glaze = glazeOpt ? glazeOpt.text.split(' + ')[0] : '';
var isQingci = (clay === '青瓷土' || glaze === '青釉');
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
var map = {'透明釉':'#f8f8f8','青釉':'#7aaeb5','白釉':'#f0f0f0','霁蓝釉':'#1a3a5c','胭脂红釉':'#c45c5c','仿古酱釉':'#6b4423'};
return map[glaze] || '#f5f5f5';
}

function getGlazeDark(glaze) {
var map = {'透明釉':'#ddd','青釉':'#5a8e95','白釉':'#d0d0d0','霁蓝釉':'#0a1a2c','胭脂红釉':'#a43c3c','仿古酱釉':'#4b3413'};
return map[glaze] || '#ddd';
}

function renderFinalResult() {
var result = determineResult();
var score = calculateScore();
var shapeMap = {'茶杯':'cup','碗':'bowl','花瓶':'vase','茶盘':'plate','笔筒':'brushpot','瓷罐':'jar'};
var shapeClass = shapeMap[state.shape] || 'cup';
var visual = document.getElementById('maker-final-visual');
var html = '<div class="porcelain-visual ' + shapeClass + '" style="--glaze-color:' + getGlazeColor(state.glaze) + ';--glaze-dark:' + getGlazeDark(state.glaze) + '"></div>';
html += '<div class="result-label ' + result.type + '">' + result.label + '</div>';
html += '<p style="color:#aaa;font-size:14px;letter-spacing:1px;">综合得分：' + score + ' / 100</p>';
visual.innerHTML = html;
var report = document.getElementById('maker-final-report');
var rHtml = '<div class="report-title">《瓷器工艺学习报告》</div>';
for (var i = 0; i < STEP_DATA.length; i++) {
var sel = selections[i];
var opt = sel !== null ? STEP_DATA[i].options[sel] : null;
var isCorrect = opt ? opt.correct : false;
if (i === 1 && opt) {
var prevOpt = selections[0] !== null ? STEP_DATA[0].options[selections[0]] : null;
var clay = prevOpt ? prevOpt.text.split(' + ')[0] : '';
if (clay === '粗陶土' && opt.text.indexOf('花瓶') !== -1 && opt.text.indexOf('粗陶土') === -1) isCorrect = false;
}
if (i === 7 && opt) {
var clayOpt = selections[0] !== null ? STEP_DATA[0].options[selections[0]] : null;
var glazeOpt = selections[6] !== null ? STEP_DATA[6].options[selections[6]] : null;
var clay = clayOpt ? clayOpt.text.split(' + ')[0] : '';
var glaze = glazeOpt ? glazeOpt.text.split(' + ')[0] : '';
var isQingci = (clay === '青瓷土' || glaze === '青釉');
if (isQingci && opt.text.indexOf('还原烧制') === -1) isCorrect = false;
}
var tagClass = isCorrect ? 'correct' : 'wrong';
var tagText = isCorrect ? '规范' : '有误';
rHtml += '<div class="report-item">';
rHtml += '<span class="report-step-name">' + STEP_DATA[i].title + '</span>';
rHtml += '<span class="report-choice">' + (opt ? opt.text : '未选择') + '</span>';
rHtml += '<span class="report-tag ' + tagClass + '">' + tagText + '</span>';
rHtml += '</div>';
}
rHtml += '<div class="report-summary">';
rHtml += '<p>' + result.desc + '</p>';
rHtml += '<p style="margin-top:8px;color:#888;font-size:13px;">';
if (result.type === 'perfect') {
rHtml += '恭喜！您掌握了全部核心制瓷工艺，从选料到成瓷每一步都精准到位。';
} else if (result.type === 'flawed') {
rHtml += '建议回顾存在问题的工序，特别注意揉泥排气、晾干环境和烧制温度的把控。';
} else {
rHtml += '强烈建议重新学习制瓷基础知识，重点掌握揉泥、晾干、温度控制三大核心工序。';
}
rHtml += '</p></div>';
report.innerHTML = rHtml;
}

function showKnowledgeBase() {
var kb = document.getElementById('maker-knowledge-base');
var content = document.getElementById('maker-kb-content');
var knowledges = [
{title:'揉泥工序',text:'揉泥是制瓷首道关键，目的排出泥料内部空气，消除坯体开裂隐患，传统古法以菊花揉、羊角揉为标准工艺。'},
{title:'塑形工序',text:'拉坯为千年古法成型工艺，依靠手部力度控制器型弧度，是手工瓷器独一无二的核心特色。'},
{title:'修坯工序',text:'修坯决定瓷器器型规整度，是成品美观的关键工序。精修可使器身线条流畅、口沿光滑、底足平整。'},
{title:'晾干工序',text:'瓷坯脱水必须匀速自然风干，极速温差、潮湿环境会直接导致坯体结构性损坏。'},
{title:'素烧工序',text:'低温素烧固化坯体结构，提升坯体硬度，为后续绘瓷、上釉提供基础，是精细瓷器制作的必备工序。'},
{title:'纹饰工序',text:'纹饰绘制是瓷器的灵魂装饰，青花、釉里红、雕刻各有特色，缠枝莲、山水、花鸟皆承载深厚文化内涵。'},
{title:'上釉工序',text:'釉料决定瓷器防水、耐磨、美观特性，不同器型对应专属上釉工艺，是瓷器成型的关键装饰防护工序。'},
{title:'成瓷工序',text:'温度与烧制氛围决定瓷器胎质、釉色、质感，不同瓷种对应专属高温参数，是成瓷成败的核心。'}
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