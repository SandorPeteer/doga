const a0_0x1c5f94=a0_0x5b4e;(function(_0x124264,_0x475208){const _0x2cebcb=a0_0x5b4e,_0x45d260=_0x124264();while(!![]){try{const _0x46f7a1=-parseInt(_0x2cebcb(0x2a3))/0x1*(-parseInt(_0x2cebcb(0x157))/0x2)+parseInt(_0x2cebcb(0x1b0))/0x3+parseInt(_0x2cebcb(0x255))/0x4+-parseInt(_0x2cebcb(0x150))/0x5+parseInt(_0x2cebcb(0x249))/0x6+parseInt(_0x2cebcb(0x1df))/0x7*(-parseInt(_0x2cebcb(0x368))/0x8)+-parseInt(_0x2cebcb(0x345))/0x9;if(_0x46f7a1===_0x475208)break;else _0x45d260['push'](_0x45d260['shift']());}catch(_0x3dfd47){_0x45d260['push'](_0x45d260['shift']());}}}(a0_0x1546,0x8532f));let tasks=[],selectedTasks=[],currentTaskIndex=0x0,globalTimeRemaining=0x18*0x3c,taskTimeRemaining=0x8*0x3c,globalTimer=null,taskTimer=null,codeEditor=null,testStartTime=null,testEndTime=null,studentData={},taskStartTimes=[],taskAnswers=[],eventLog=[];const startSection=document[a0_0x1c5f94(0x21b)](a0_0x1c5f94(0x1e3)),quizSection=document[a0_0x1c5f94(0x21b)]('quiz-section'),endSection=document[a0_0x1c5f94(0x21b)](a0_0x1c5f94(0x22b)),submitModal=document[a0_0x1c5f94(0x21b)]('submit-modal'),fullscreenPrompt=document['getElementById']('fullscreen-prompt');function a0_0x5b4e(_0x360bbc,_0x547629){_0x360bbc=_0x360bbc-0x150;const _0x1546af=a0_0x1546();let _0x5b4e80=_0x1546af[_0x360bbc];if(a0_0x5b4e['ONDWAr']===undefined){var _0x219ad6=function(_0x11b70b){const _0x377571='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x10b4ec='',_0xb96c6d='';for(let _0x3aa482=0x0,_0x3e6283,_0x57381a,_0x278126=0x0;_0x57381a=_0x11b70b['charAt'](_0x278126++);~_0x57381a&&(_0x3e6283=_0x3aa482%0x4?_0x3e6283*0x40+_0x57381a:_0x57381a,_0x3aa482++%0x4)?_0x10b4ec+=String['fromCharCode'](0xff&_0x3e6283>>(-0x2*_0x3aa482&0x6)):0x0){_0x57381a=_0x377571['indexOf'](_0x57381a);}for(let _0x4cc6d3=0x0,_0x304924=_0x10b4ec['length'];_0x4cc6d3<_0x304924;_0x4cc6d3++){_0xb96c6d+='%'+('00'+_0x10b4ec['charCodeAt'](_0x4cc6d3)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xb96c6d);};a0_0x5b4e['xNGwZs']=_0x219ad6,a0_0x5b4e['gQXGYP']={},a0_0x5b4e['ONDWAr']=!![];}const _0x16a97a=_0x1546af[0x0],_0x188532=_0x360bbc+_0x16a97a,_0x96d729=a0_0x5b4e['gQXGYP'][_0x188532];return!_0x96d729?(_0x5b4e80=a0_0x5b4e['xNGwZs'](_0x5b4e80),a0_0x5b4e['gQXGYP'][_0x188532]=_0x5b4e80):_0x5b4e80=_0x96d729,_0x5b4e80;}document[a0_0x1c5f94(0x298)](a0_0x1c5f94(0x30e),()=>{const _0x50eafc=a0_0x1c5f94,_0x11d1fc={'WPUpD':function(_0x5b1092){return _0x5b1092();}};_0x11d1fc[_0x50eafc(0x262)](initializeApp);});function initializeApp(){const _0x263710=a0_0x1c5f94,_0x30f96b={'yccwH':function(_0x303320){return _0x303320();}};logEvent(_0x263710(0x33f)),setupEventListeners(),_0x30f96b[_0x263710(0x252)](loadTasksFromFile);}function setupEventListeners(){const _0x55f31f=a0_0x1c5f94,_0x125490={};_0x125490[_0x55f31f(0x217)]=_0x55f31f(0x1d0),_0x125490[_0x55f31f(0x1b6)]=function(_0x20b750,_0x43a71d){return _0x20b750!==_0x43a71d;},_0x125490[_0x55f31f(0x33e)]='vfMqM',_0x125490['lgFny']=_0x55f31f(0x254),_0x125490[_0x55f31f(0x375)]=function(_0x320a78,_0x426cb4){return _0x320a78===_0x426cb4;},_0x125490[_0x55f31f(0x1d3)]=function(_0x1d60d8,_0x4cd260){return _0x1d60d8===_0x4cd260;},_0x125490[_0x55f31f(0x29b)]=_0x55f31f(0x333),_0x125490[_0x55f31f(0x2ff)]=_0x55f31f(0x186),_0x125490[_0x55f31f(0x33b)]='confirm-submit',_0x125490[_0x55f31f(0x1bd)]='run-code-btn',_0x125490[_0x55f31f(0x1cd)]='contextmenu',_0x125490[_0x55f31f(0x17d)]='mozfullscreenchange',_0x125490[_0x55f31f(0x32b)]=_0x55f31f(0x261);const _0x215f3e=_0x125490;document[_0x55f31f(0x21b)](_0x215f3e[_0x55f31f(0x29b)])[_0x55f31f(0x298)](_0x215f3e['WXUki'],startTest),document[_0x55f31f(0x21b)]('skip-btn')[_0x55f31f(0x298)](_0x215f3e[_0x55f31f(0x2ff)],skipTask),document['getElementById'](_0x55f31f(0x31c))[_0x55f31f(0x298)](_0x215f3e[_0x55f31f(0x2ff)],showSubmitModal),document[_0x55f31f(0x21b)](_0x215f3e[_0x55f31f(0x33b)])['addEventListener'](_0x55f31f(0x186),submitTest),document[_0x55f31f(0x21b)](_0x55f31f(0x24f))[_0x55f31f(0x298)](_0x215f3e['WXUki'],hideSubmitModal),document[_0x55f31f(0x21b)](_0x215f3e[_0x55f31f(0x1bd)])[_0x55f31f(0x298)](_0x215f3e[_0x55f31f(0x2ff)],runPythonCode),document[_0x55f31f(0x298)](_0x215f3e[_0x55f31f(0x1cd)],_0x3dc9a9=>{const _0x2ba5fa=_0x55f31f;if(_0x2ba5fa(0x1d0)===_0x215f3e[_0x2ba5fa(0x217)])return _0x3dc9a9[_0x2ba5fa(0x2ce)](),![];else _0xf8f90=![];}),document[_0x55f31f(0x298)](_0x55f31f(0x1cb),_0x235f69=>{const _0x3447c7=_0x55f31f;if(_0x215f3e[_0x3447c7(0x1b6)]('ROaMC',_0x215f3e[_0x3447c7(0x33e)])){if(_0x235f69[_0x3447c7(0x37f)]===_0x215f3e[_0x3447c7(0x1b9)]||_0x235f69[_0x3447c7(0x310)]&&_0x235f69[_0x3447c7(0x352)]&&(_0x235f69['key']==='I'||_0x215f3e[_0x3447c7(0x375)](_0x235f69[_0x3447c7(0x37f)],'J')||_0x215f3e['YDDVA'](_0x235f69[_0x3447c7(0x37f)],'C'))||_0x235f69[_0x3447c7(0x310)]&&_0x215f3e[_0x3447c7(0x375)](_0x235f69['key'],'U'))return _0x235f69[_0x3447c7(0x2ce)](),![];}else _0x460af1+=0xa;}),detectDevTools(),document[_0x55f31f(0x298)](_0x55f31f(0x173),handleFullscreenChange),document[_0x55f31f(0x298)](_0x55f31f(0x309),handleFullscreenChange),document[_0x55f31f(0x298)](_0x215f3e[_0x55f31f(0x17d)],handleFullscreenChange),document[_0x55f31f(0x298)](_0x215f3e[_0x55f31f(0x32b)],handleFullscreenChange),document[_0x55f31f(0x298)](_0x55f31f(0x1f2),handleVisibilityChange);}async function loadTasksFromFile(){const _0x5853de=a0_0x1c5f94,_0x3ba8f8={'iqFbG':function(_0x3fa797,_0x5fbec6){return _0x3fa797!==_0x5fbec6;},'nHAzo':_0x5853de(0x171),'NHzYg':_0x5853de(0x2cf),'zJrcu':function(_0x4ec859,_0x13ab82){return _0x4ec859(_0x13ab82);},'zpAnO':'python_8_pontos_feladatok.txt','YTQLt':function(_0x196c98,_0x5c2610,_0x2e142a){return _0x196c98(_0x5c2610,_0x2e142a);},'bGEfn':_0x5853de(0x1a1),'cjfaw':_0x5853de(0x1db),'aviGK':_0x5853de(0x199)};try{if(_0x3ba8f8[_0x5853de(0x1fc)](_0x3ba8f8[_0x5853de(0x20a)],_0x3ba8f8[_0x5853de(0x24e)])){const _0x43ae69=await _0x3ba8f8[_0x5853de(0x2e7)](fetch,_0x3ba8f8[_0x5853de(0x32c)]),_0x329463=await _0x43ae69[_0x5853de(0x179)]();_0x3ba8f8[_0x5853de(0x2e7)](parseTasks,_0x329463);const _0x418a83={};_0x418a83['count']=tasks['length'],_0x3ba8f8[_0x5853de(0x30c)](logEvent,_0x3ba8f8[_0x5853de(0x2fc)],_0x418a83);}else return _0x54b468[_0x5853de(0x2ce)](),![];}catch(_0x5c279b){_0x3ba8f8[_0x5853de(0x2e7)](alert,_0x3ba8f8[_0x5853de(0x2f6)]);const _0x4eb220={};_0x4eb220[_0x5853de(0x18e)]=_0x5c279b[_0x5853de(0x177)],logEvent(_0x3ba8f8[_0x5853de(0x16f)],_0x4eb220);}}function parseTasks(_0x1d52b2){const _0x24423c=a0_0x1c5f94,_0x1e8b62={'eYovJ':_0x24423c(0x1a5),'URjFJ':function(_0x3abf3b,_0x1e976e){return _0x3abf3b(_0x1e976e);},'QspIo':function(_0x3e2b0b,_0x1015ee){return _0x3e2b0b===_0x1015ee;},'vbcFx':_0x24423c(0x324),'hgwjc':function(_0x32c251,_0x27085d){return _0x32c251===_0x27085d;},'ANGPf':'guKgW','kJouP':function(_0x25783c,_0x215a98){return _0x25783c!==_0x215a98;},'DwBys':function(_0x96e16c,_0x5b5445){return _0x96e16c!==_0x5b5445;}},_0x310701=_0x1d52b2[_0x24423c(0x168)]('\x0a');let _0x15105b=null,_0x2206a7=![],_0x472427=[];for(let _0x4f89b9 of _0x310701){const _0x2abd09=_0x4f89b9[_0x24423c(0x342)](/^(\d+)\.\s*feladat/i);if(_0x2abd09){if(_0x1e8b62[_0x24423c(0x24c)]===_0x24423c(0x1a5)){_0x15105b&&(_0x15105b[_0x24423c(0x314)]=_0x472427[_0x24423c(0x24d)]('\x0a'),tasks[_0x24423c(0x264)](_0x15105b));_0x15105b={'number':_0x1e8b62[_0x24423c(0x19b)](parseInt,_0x2abd09[0x1]),'description':'','example':''},_0x2206a7=![],_0x472427=[];continue;}else _0x599e5e[_0x24423c(0x1ad)]()[_0x24423c(0x281)](()=>{});}if(_0x1e8b62['QspIo'](_0x4f89b9[_0x24423c(0x22c)](),_0x1e8b62[_0x24423c(0x15f)])){_0x2206a7?_0x1e8b62['hgwjc'](_0x1e8b62[_0x24423c(0x176)],'guKgW')?_0x2206a7=![]:_0x549046+=0x28:_0x2206a7=!![];continue;}if(_0x4f89b9[_0x24423c(0x342)](/^Minta kód:/i))continue;if(_0x15105b){if(_0x2206a7)_0x472427[_0x24423c(0x264)](_0x4f89b9);else _0x1e8b62['kJouP'](_0x4f89b9[_0x24423c(0x22c)](),'')&&(_0x1e8b62[_0x24423c(0x34c)](_0x15105b['description'],'')&&(_0x15105b[_0x24423c(0x306)]+='\x0a'),_0x15105b['description']+=_0x4f89b9);}}_0x15105b&&(_0x15105b[_0x24423c(0x314)]=_0x472427['join']('\x0a'),tasks[_0x24423c(0x264)](_0x15105b));}function startTest(){const _0x59d606=a0_0x1c5f94,_0x38fa87={'pCNrY':function(_0x16f67a,_0x31117b){return _0x16f67a(_0x31117b);},'ZNAxA':_0x59d606(0x215),'aiYCu':_0x59d606(0x356),'LYHNK':function(_0x2e3505,_0x56dc95){return _0x2e3505(_0x56dc95);},'wLelR':_0x59d606(0x223),'jzzih':function(_0x18726f){return _0x18726f();},'lrFxl':_0x59d606(0x1c2),'FGZES':_0x59d606(0x18b),'TjNQu':function(_0x263958){return _0x263958();},'cpQqK':function(_0x3c40b4,_0x8ae0b0){return _0x3c40b4(_0x8ae0b0);},'qkuNB':_0x59d606(0x31e),'wkgjn':_0x59d606(0x308),'DpNZk':_0x59d606(0x1b7),'cnHoh':_0x59d606(0x2b8),'eSNqD':function(_0x46e530,_0x2d377a){return _0x46e530||_0x2d377a;},'OiVDq':function(_0x4be37b,_0x4eb1af){return _0x4be37b(_0x4eb1af);},'SDDoz':'Kérlek,\x20töltsd\x20ki\x20az\x20összes\x20mezőt!','xupPJ':function(_0x6dd7f5,_0x454b28){return _0x6dd7f5<_0x454b28;},'kpcOv':function(_0x91747d,_0x12a597){return _0x91747d(_0x12a597);},'Huocn':function(_0x57b65c,_0x9df8ca){return _0x57b65c+_0x9df8ca;},'jOnbt':_0x59d606(0x277),'pPCFa':function(_0x3eea09,_0x1e5bab,_0x1e50da){return _0x3eea09(_0x1e5bab,_0x1e50da);},'FQAuY':_0x59d606(0x1b4),'YeSGx':_0x59d606(0x216),'UlCTQ':function(_0x3dd70b,_0x3ca236,_0x5be6fd){return _0x3dd70b(_0x3ca236,_0x5be6fd);}},_0x1be730=document['getElementById'](_0x38fa87['wkgjn'])[_0x59d606(0x337)][_0x59d606(0x22c)](),_0x571c21=document[_0x59d606(0x21b)](_0x38fa87[_0x59d606(0x263)])[_0x59d606(0x337)][_0x59d606(0x22c)](),_0x2d6808=document[_0x59d606(0x21b)](_0x38fa87[_0x59d606(0x27b)])['value'][_0x59d606(0x22c)]();if(_0x38fa87[_0x59d606(0x292)](!_0x1be730,!_0x571c21)||!_0x2d6808){_0x38fa87[_0x59d606(0x248)](alert,_0x38fa87[_0x59d606(0x2ee)]);return;}if(_0x38fa87[_0x59d606(0x287)](tasks[_0x59d606(0x26d)],0x3)){_0x38fa87['kpcOv'](alert,_0x38fa87[_0x59d606(0x1da)](_0x38fa87['jOnbt'],tasks['length']));return;}const _0x331cb7={};_0x331cb7[_0x59d606(0x308)]=_0x1be730,_0x331cb7[_0x59d606(0x1b7)]=_0x571c21,_0x331cb7[_0x59d606(0x2b8)]=_0x2d6808,studentData=_0x331cb7,testStartTime=new Date(),_0x38fa87[_0x59d606(0x26b)](logEvent,_0x38fa87['FQAuY'],studentData),selectRandomTasks(),taskAnswers=selectedTasks[_0x59d606(0x29f)](_0x13a06c=>({'taskNumber':_0x13a06c[_0x59d606(0x372)],'taskDescription':_0x13a06c[_0x59d606(0x306)],'taskExample':_0x13a06c[_0x59d606(0x314)],'allocatedTime':_0x13a06c[_0x59d606(0x373)],'answer':'','timeSpent':0x0,'startTime':null,'endTime':null,'skipped':![]}));const _0x4b92d0=selectedTasks[_0x59d606(0x203)]((_0x10f0ec,_0x597468)=>_0x10f0ec+_0x597468[_0x59d606(0x373)],0x0);globalTimeRemaining=_0x4b92d0,startSection[_0x59d606(0x206)][_0x59d606(0x380)](_0x38fa87['YeSGx']),quizSection[_0x59d606(0x206)]['remove'](_0x38fa87[_0x59d606(0x23a)]),initializeCodeEditor(),_0x38fa87['TjNQu'](enterFullscreen),_0x38fa87[_0x59d606(0x16c)](setTimeout,()=>{const _0x284d86=_0x59d606,_0x4b8834={'eswVV':function(_0x39d8d0,_0x24dd97){const _0xefd1bd=a0_0x5b4e;return _0x38fa87[_0xefd1bd(0x296)](_0x39d8d0,_0x24dd97);},'rjxQh':_0x38fa87['wLelR'],'hcuBB':function(_0x4c1224){const _0x4302a7=a0_0x5b4e;return _0x38fa87[_0x4302a7(0x27e)](_0x4c1224);}};_0x38fa87['lrFxl']===_0x38fa87['FGZES']?(_0x38fa87[_0x284d86(0x17b)](_0x1d0cab,_0x38fa87[_0x284d86(0x376)]),_0x30797c[_0x284d86(0x2cd)][_0x284d86(0x317)]=_0x38fa87[_0x284d86(0x37b)],_0x32cc75(()=>{const _0x1fe6b1=_0x284d86;_0x4b8834[_0x1fe6b1(0x288)](_0x17e0a9,_0x4b8834['rjxQh']),_0x4b8834[_0x1fe6b1(0x16d)](_0x4a2e78);},0x1f4)):(currentTaskIndex=0x0,_0x38fa87[_0x284d86(0x2ae)](startGlobalTimer),_0x38fa87[_0x284d86(0x2f8)](showTask,currentTaskIndex),_0x38fa87['cpQqK'](logEvent,_0x38fa87[_0x284d86(0x29e)]));},0x64);}function selectRandomTasks(){const _0x3a3095=a0_0x1c5f94,_0x486b11={'zYjni':'text/plain;charset=utf-8','bdZph':'Results\x20saved\x20to\x20file','hWXqy':function(_0x2926f3,_0x1789dc){return _0x2926f3!==_0x1789dc;},'HcuRB':_0x3a3095(0x1d6),'BmSun':'MOwpU','ZoWtJ':function(_0x50b3e6,_0x119028){return _0x50b3e6(_0x119028);},'ZCWkd':function(_0x2d00d6,_0x527c97,_0x9c9901){return _0x2d00d6(_0x527c97,_0x9c9901);},'cwFTw':_0x3a3095(0x36f)},_0x95128b=[...tasks][_0x3a3095(0x278)](()=>0.5-Math[_0x3a3095(0x169)]());selectedTasks=_0x95128b['slice'](0x0,0x3),selectedTasks[_0x3a3095(0x1eb)](_0x1ba8c7=>{const _0x122f09=_0x3a3095,_0xaae2ce={'kEZKZ':_0x486b11['zYjni'],'LSBBV':function(_0x3f1618,_0x352ab4,_0x119108){return _0x3f1618(_0x352ab4,_0x119108);},'ujczn':_0x486b11[_0x122f09(0x2ef)]};if(_0x486b11[_0x122f09(0x257)](_0x486b11['HcuRB'],_0x486b11[_0x122f09(0x237)]))_0x1ba8c7[_0x122f09(0x373)]=_0x486b11['ZoWtJ'](calculateTaskTime,_0x1ba8c7);else try{const _0x22e7b9={};_0x22e7b9[_0x122f09(0x335)]=_0xaae2ce[_0x122f09(0x256)];const _0x133f5e=new _0x2ff362([_0x87d61b],_0x22e7b9),_0x24b1c7=_0x1fec56['createObjectURL'](_0x133f5e),_0x512075=_0x940ef3[_0x122f09(0x307)]('a');_0x512075[_0x122f09(0x25c)]=_0x24b1c7;const _0x4abab5=new _0x3b788d()['toISOString']()['replace'](/[:.]/g,'-')['slice'](0x0,-0x5),_0x42414c='Python_Teszt_'+_0x30c025[_0x122f09(0x308)]+'_'+_0x18b8d5[_0x122f09(0x2b8)]+'_'+_0x4abab5+_0x122f09(0x221);_0x512075[_0x122f09(0x2fa)]=_0x42414c,_0x1009a8[_0x122f09(0x23e)]['appendChild'](_0x512075),_0x512075['click'](),_0x29a7ec[_0x122f09(0x23e)][_0x122f09(0x15c)](_0x512075),_0x268839[_0x122f09(0x2e6)](_0x24b1c7);const _0x3f792b={};_0x3f792b[_0x122f09(0x22a)]=_0x42414c,_0xaae2ce[_0x122f09(0x271)](_0x2a69e2,_0xaae2ce['ujczn'],_0x3f792b);}catch(_0x435e91){const _0x489776={};_0x489776[_0x122f09(0x18e)]=_0x435e91['message'],_0xaae2ce[_0x122f09(0x271)](_0x58480b,'File\x20save\x20failed',_0x489776);}}),_0x486b11['ZCWkd'](logEvent,_0x486b11['cwFTw'],{'tasks':selectedTasks[_0x3a3095(0x29f)](_0x1dae60=>({'number':_0x1dae60['number'],'time':_0x1dae60['allocatedTime']}))});}function calculateTaskTime(_0x5835fa){const _0x4582c8=a0_0x1c5f94,_0x258f76={'voedD':function(_0x3b0c0f,_0x2e24b9){return _0x3b0c0f<_0x2e24b9;},'BOhdL':function(_0x5ddb46,_0x4a60a5){return _0x5ddb46>=_0x4a60a5;},'GdnEA':function(_0x2ae502,_0x4d77e0,_0x5a2543){return _0x2ae502(_0x4d77e0,_0x5a2543);},'hKxXK':_0x4582c8(0x37c),'jBjkk':_0x4582c8(0x2d0),'dMTcI':function(_0x521518,_0x128002){return _0x521518+_0x128002;},'wncZh':_0x4582c8(0x1ca),'otkca':function(_0x4c7fd4){return _0x4c7fd4();},'hmJVJ':function(_0x3ab7b2,_0x4c4920,_0x42aa6a){return _0x3ab7b2(_0x4c4920,_0x42aa6a);},'naEKf':_0x4582c8(0x19a),'fGztr':function(_0x59a405,_0x14944a){return _0x59a405<=_0x14944a;},'IAdZt':_0x4582c8(0x21e),'Ssarz':function(_0x41b17f,_0x2a9907){return _0x41b17f%_0x2a9907;},'mSGWi':function(_0x178573,_0x16c1da){return _0x178573+_0x16c1da;},'ZHEKw':_0x4582c8(0x1b5),'TURCA':function(_0x3c0da5){return _0x3c0da5();},'bqCDh':_0x4582c8(0x2fb),'gsWZE':function(_0x29f687,_0x53f3a3){return _0x29f687+_0x53f3a3;},'phbRX':function(_0x1f0403,_0x4da98){return _0x1f0403>_0x4da98;},'DuYvE':_0x4582c8(0x1c1),'DnfFF':function(_0x2aea05,_0x3d7bbe){return _0x2aea05===_0x3d7bbe;},'byxzZ':_0x4582c8(0x303),'kRDVz':function(_0x1d2d40,_0x11fa7b){return _0x1d2d40<_0x11fa7b;},'gEtXI':function(_0x132b66,_0x228132){return _0x132b66!==_0x228132;},'kbONb':'veiIn','rpqea':function(_0x55932b,_0x13b834){return _0x55932b===_0x13b834;},'isvgR':'HQlNO','uEJZi':function(_0x461191,_0x2826b8){return _0x461191*_0x2826b8;},'VIwzn':function(_0x1a0eca,_0x34579f){return _0x1a0eca-_0x34579f;}},_0x24cc65=_0x5835fa[_0x4582c8(0x306)][_0x4582c8(0x26d)],_0x20884f=_0x5835fa['example'][_0x4582c8(0x26d)],_0x267de2=_0x258f76[_0x4582c8(0x32e)](_0x24cc65,_0x20884f),_0x2a2c88=(_0x5835fa[_0x4582c8(0x314)][_0x4582c8(0x342)](/\n/g)||[])[_0x4582c8(0x26d)],_0x568d60=_0x258f76[_0x4582c8(0x381)](_0x5835fa[_0x4582c8(0x314)][_0x4582c8(0x168)]('\x0a\x0a')[_0x4582c8(0x26d)],0x1);let _0x2ca801=0x0;if(_0x258f76[_0x4582c8(0x201)](_0x267de2,0xc8)){if(_0x258f76[_0x4582c8(0x2e3)]===_0x258f76[_0x4582c8(0x2e3)])_0x2ca801+=0xa;else{if(_0x258f76[_0x4582c8(0x201)](_0x8e9478,0x0)||_0x258f76[_0x4582c8(0x158)](_0x2a506d,_0x57a3dc[_0x4582c8(0x26d)]))return;_0x5a9afa=_0x4f18ac;const _0x484a92=_0x245b4e[_0x43a55b],_0x1f5f22=_0x1fdba1[_0x422bf0];if(!_0x1f5f22[_0x4582c8(0x19e)]){_0x1f5f22['startTime']=new _0x966800();const _0x35bb5c={};_0x35bb5c['taskNumber']=_0x484a92[_0x4582c8(0x372)],_0x35bb5c['index']=_0x2f162c,_0x258f76[_0x4582c8(0x34f)](_0x4cc4ef,_0x258f76['hKxXK'],_0x35bb5c);}_0xc84b6d[_0x4582c8(0x21b)](_0x258f76['jBjkk'])[_0x4582c8(0x2c8)]=_0x258f76[_0x4582c8(0x23d)](_0x3dba3e,0x1)+_0x4582c8(0x2f0),_0x53b0f4[_0x4582c8(0x21b)](_0x4582c8(0x355))[_0x4582c8(0x2c8)]=_0x484a92[_0x4582c8(0x306)],_0x513c5a[_0x4582c8(0x21b)](_0x258f76[_0x4582c8(0x327)])['textContent']=_0x484a92[_0x4582c8(0x314)],_0x200c15[_0x4582c8(0x2ea)](_0x1f5f22[_0x4582c8(0x164)]||''),_0x258f76[_0x4582c8(0x349)](_0x4ed75b);!_0x954be6&&(_0x14be44=_0x484a92[_0x4582c8(0x373)],_0x258f76[_0x4582c8(0x349)](_0x51da00));const _0x109b7d={};_0x109b7d['taskNumber']=_0x484a92[_0x4582c8(0x372)],_0x109b7d[_0x4582c8(0x1ff)]=_0x5aea97,_0x109b7d[_0x4582c8(0x373)]=_0x484a92[_0x4582c8(0x373)],_0x258f76[_0x4582c8(0x1a2)](_0x4f1992,_0x258f76[_0x4582c8(0x213)],_0x109b7d);}}else{if(_0x258f76[_0x4582c8(0x201)](_0x267de2,0x190)){if(_0x258f76['DnfFF'](_0x258f76[_0x4582c8(0x233)],_0x258f76[_0x4582c8(0x233)]))_0x2ca801+=0x14;else{_0x6d66b4--,_0x258f76[_0x4582c8(0x349)](_0x2b5011);if(_0x258f76[_0x4582c8(0x236)](_0x59a578,0x0)){const _0x36192c={};_0x36192c[_0x4582c8(0x1f9)]=_0x575863[_0xbfd4bf][_0x4582c8(0x372)],_0x42129b(_0x258f76[_0x4582c8(0x1ce)],_0x36192c);const _0x5840d5=_0x258f76[_0x4582c8(0x28f)](_0x258f76['mSGWi'](_0x23378d,0x1),_0x205a9f[_0x4582c8(0x26d)]);_0x557024=_0x1b24fe[_0x5840d5]['allocatedTime'],_0x4d9af9();}}}else _0x258f76['kRDVz'](_0x267de2,0x258)?_0x2ca801+=0x1e:_0x258f76[_0x4582c8(0x32d)](_0x258f76[_0x4582c8(0x167)],_0x4582c8(0x29a))?_0x2ca801+=0x28:_0x10b80b+=0x1e;}if(_0x258f76[_0x4582c8(0x175)](_0x2a2c88,0x5))_0x2ca801+=0xa;else _0x258f76[_0x4582c8(0x175)](_0x2a2c88,0xa)?_0x2ca801+=0x14:_0x2ca801+=0x1e;if(_0x568d60){if(_0x258f76[_0x4582c8(0x2dc)](_0x4582c8(0x2e1),_0x258f76[_0x4582c8(0x21a)])){const _0x106f6f=_0x258f76[_0x4582c8(0x15a)]['split']('|');let _0x521c41=0x0;while(!![]){switch(_0x106f6f[_0x521c41++]){case'0':_0x2f953c();continue;case'1':_0x258f76[_0x4582c8(0x2e4)](_0x5443f6);continue;case'2':_0x2d2677();continue;case'3':_0x258f76['TURCA'](_0x3f3681);continue;case'4':_0x193149(_0x258f76['bqCDh']);continue;case'5':_0x293066=new _0x45fc5f();continue;}break;}}else _0x2ca801+=0x1e;}else _0x2ca801+=0xf;const _0x5c5902=_0x258f76[_0x4582c8(0x163)](0xa,0x3c),_0x266111=_0x258f76[_0x4582c8(0x163)](0xf,0x3c),_0x47acc6=_0x258f76[_0x4582c8(0x2ad)](_0x266111,_0x5c5902),_0xaab1e4=Math[_0x4582c8(0x336)](_0x258f76['gsWZE'](_0x5c5902,_0x2ca801/0x64*_0x47acc6));return _0xaab1e4;}function initializeCodeEditor(){const _0xf5dd31=a0_0x1c5f94,_0x193349={};_0x193349[_0xf5dd31(0x359)]=function(_0x18f58,_0x1626e6){return _0x18f58>=_0x1626e6;},_0x193349['xJfrI']=function(_0x4d55df,_0x1eaeab){return _0x4d55df<_0x1eaeab;},_0x193349['LSOfJ']=_0xf5dd31(0x2c5),_0x193349[_0xf5dd31(0x224)]='python',_0x193349['pXqkE']='monokai';const _0x1fd438=_0x193349,_0x34804a=document[_0xf5dd31(0x21b)](_0x1fd438[_0xf5dd31(0x1c8)]),_0x419a40={};_0x419a40[_0xf5dd31(0x325)]=_0x1fd438[_0xf5dd31(0x224)],_0x419a40[_0xf5dd31(0x315)]=_0x1fd438[_0xf5dd31(0x2e5)],_0x419a40['lineNumbers']=!![],_0x419a40[_0xf5dd31(0x2ed)]=0x4,_0x419a40[_0xf5dd31(0x270)]=![],_0x419a40['lineWrapping']=!![],_0x419a40[_0xf5dd31(0x1fe)]=!![],_0x419a40[_0xf5dd31(0x1b1)]=!![],codeEditor=CodeMirror[_0xf5dd31(0x35c)](_0x34804a,_0x419a40),codeEditor['on']('change',()=>{const _0x5672ed=_0xf5dd31;_0x1fd438['QyeSg'](currentTaskIndex,0x0)&&_0x1fd438[_0x5672ed(0x28c)](currentTaskIndex,taskAnswers[_0x5672ed(0x26d)])&&(taskAnswers[currentTaskIndex][_0x5672ed(0x164)]=codeEditor['getValue']());});}function showTask(_0x35840f){const _0x39f128=a0_0x1c5f94,_0x58bacc={'bTsFX':function(_0x522472,_0x5d9e52){return _0x522472<_0x5d9e52;},'HNuGw':function(_0x162156,_0x4a398f){return _0x162156!==_0x4a398f;},'FLrkJ':'VYCij','lgnje':function(_0x4513e3,_0x1382b3,_0x5b7d88){return _0x4513e3(_0x1382b3,_0x5b7d88);},'gQLHx':'Task\x20started','hourM':function(_0x573acc,_0x25ab40){return _0x573acc+_0x25ab40;},'mbIJg':_0x39f128(0x1ca),'GUbpq':function(_0x1a673a){return _0x1a673a();},'pvvXH':function(_0x3c44f6,_0x28457a,_0x4acfa9){return _0x3c44f6(_0x28457a,_0x4acfa9);}};if(_0x58bacc[_0x39f128(0x1a9)](_0x35840f,0x0)||_0x35840f>=selectedTasks[_0x39f128(0x26d)]){if(_0x58bacc[_0x39f128(0x2de)](_0x58bacc[_0x39f128(0x357)],_0x58bacc[_0x39f128(0x357)]))_0x2f85d0+=0xf;else return;}currentTaskIndex=_0x35840f;const _0x46009f=selectedTasks[_0x35840f],_0x1f092a=taskAnswers[_0x35840f];if(!_0x1f092a[_0x39f128(0x19e)]){_0x1f092a[_0x39f128(0x19e)]=new Date();const _0x2debc1={};_0x2debc1[_0x39f128(0x1f9)]=_0x46009f[_0x39f128(0x372)],_0x2debc1[_0x39f128(0x1ff)]=_0x35840f,_0x58bacc[_0x39f128(0x266)](logEvent,_0x58bacc['gQLHx'],_0x2debc1);}document['getElementById'](_0x39f128(0x2d0))[_0x39f128(0x2c8)]=_0x58bacc['hourM'](_0x35840f,0x1)+_0x39f128(0x2f0),document[_0x39f128(0x21b)](_0x39f128(0x355))['textContent']=_0x46009f[_0x39f128(0x306)],document['getElementById'](_0x58bacc[_0x39f128(0x2a8)])[_0x39f128(0x2c8)]=_0x46009f['example'],codeEditor[_0x39f128(0x2ea)](_0x1f092a[_0x39f128(0x164)]||''),_0x58bacc[_0x39f128(0x2ec)](updateTaskNavigation);!taskTimer&&(taskTimeRemaining=_0x46009f['allocatedTime'],_0x58bacc[_0x39f128(0x2ec)](startTaskTimer));const _0x4b39bb={};_0x4b39bb[_0x39f128(0x1f9)]=_0x46009f[_0x39f128(0x372)],_0x4b39bb[_0x39f128(0x1ff)]=_0x35840f,_0x4b39bb['allocatedTime']=_0x46009f['allocatedTime'],_0x58bacc[_0x39f128(0x2be)](logEvent,_0x39f128(0x19a),_0x4b39bb);}function updateTaskNavigation(){const _0x62ecf1=a0_0x1c5f94,_0x500f3c={'UNfuX':function(_0x489099){return _0x489099();},'uFfJw':function(_0x317f33){return _0x317f33();},'pWpEa':function(_0x5ef087){return _0x5ef087();},'SyVLC':function(_0x127f72,_0x3a1673){return _0x127f72(_0x3a1673);},'XbFXX':function(_0x3d9170,_0x13b338){return _0x3d9170!==_0x13b338;},'reXWt':_0x62ecf1(0x1c6),'nDhfQ':'task-nav-btn','YGwTC':function(_0x212882,_0x30efa9){return _0x212882+_0x30efa9;},'TjArU':function(_0x17729b,_0x2f93aa){return _0x17729b===_0x2f93aa;},'DtQlB':_0x62ecf1(0x370),'ueYFY':_0x62ecf1(0x282),'COBkb':'completed','ALBsY':_0x62ecf1(0x2eb)},_0x3ea572=document[_0x62ecf1(0x21b)](_0x500f3c[_0x62ecf1(0x29d)]);_0x3ea572[_0x62ecf1(0x241)]='',selectedTasks[_0x62ecf1(0x1eb)]((_0x52eb81,_0x121b70)=>{const _0x2147cf=_0x62ecf1,_0xfa93a={'BPagE':function(_0x1ba87e){const _0x2f8d56=a0_0x5b4e;return _0x500f3c[_0x2f8d56(0x1d9)](_0x1ba87e);},'LrHwc':function(_0x4d4543){const _0x340b9c=a0_0x5b4e;return _0x500f3c[_0x340b9c(0x185)](_0x4d4543);},'LFmpl':function(_0x1358ff){const _0x4d24c5=a0_0x5b4e;return _0x500f3c[_0x4d24c5(0x202)](_0x1358ff);},'JINbI':function(_0x94ce98,_0x582913){const _0x10146f=a0_0x5b4e;return _0x500f3c[_0x10146f(0x1ef)](_0x94ce98,_0x582913);}};if(_0x500f3c[_0x2147cf(0x2fd)](_0x500f3c['reXWt'],_0x500f3c[_0x2147cf(0x222)]))_0xfa93a[_0x2147cf(0x1b3)](_0xb96c6d);else{const _0x14306c=document[_0x2147cf(0x307)](_0x2147cf(0x1bc));_0x14306c[_0x2147cf(0x184)]=_0x500f3c[_0x2147cf(0x2e2)],_0x14306c[_0x2147cf(0x2c8)]=_0x500f3c['YGwTC'](_0x121b70,0x1)+_0x2147cf(0x2f0),_0x500f3c[_0x2147cf(0x1ae)](_0x121b70,currentTaskIndex)&&(_0x2147cf(0x239)!==_0x500f3c[_0x2147cf(0x24b)]?_0x14306c[_0x2147cf(0x206)]['add'](_0x500f3c[_0x2147cf(0x183)]):(_0x577f32&&(_0x309779(_0x35e8ea),_0x42e170=null),_0xfa93a[_0x2147cf(0x232)](_0x86f370))),taskAnswers[_0x121b70]['answer']&&_0x500f3c[_0x2147cf(0x2fd)](taskAnswers[_0x121b70][_0x2147cf(0x164)][_0x2147cf(0x22c)](),'')&&_0x14306c[_0x2147cf(0x206)]['add'](_0x500f3c[_0x2147cf(0x2d1)]),_0x14306c[_0x2147cf(0x298)]('click',()=>{const _0x1f63bc=_0x2147cf;_0xfa93a[_0x1f63bc(0x1d5)](saveCurrentTaskTime),stopTaskTimer(),taskTimeRemaining=selectedTasks[_0x121b70][_0x1f63bc(0x373)],_0xfa93a[_0x1f63bc(0x313)](showTask,_0x121b70);}),_0x3ea572[_0x2147cf(0x2d4)](_0x14306c);}});}function skipTask(){const _0x590fa3=a0_0x1c5f94,_0x3933c3={'dJpiv':function(_0x2a3d23,_0x39ea7b,_0x5203c8){return _0x2a3d23(_0x39ea7b,_0x5203c8);},'iOWqD':function(_0xddf05b){return _0xddf05b();},'vmiyJ':function(_0x2731d9){return _0x2731d9();},'zukFc':function(_0x3db56e,_0x52eafb){return _0x3db56e%_0x52eafb;},'uLjZJ':function(_0x82aad3,_0x1db4b1){return _0x82aad3(_0x1db4b1);}},_0xf5bf4={};_0xf5bf4['taskNumber']=selectedTasks[currentTaskIndex][_0x590fa3(0x372)],_0x3933c3['dJpiv'](logEvent,'Task\x20skipped',_0xf5bf4),_0x3933c3['iOWqD'](saveCurrentTaskTime),_0x3933c3[_0x590fa3(0x1cf)](stopTaskTimer),taskAnswers[currentTaskIndex]['skipped']=!![];const _0x3db1e6=_0x3933c3[_0x590fa3(0x36b)](currentTaskIndex+0x1,selectedTasks[_0x590fa3(0x26d)]);taskTimeRemaining=selectedTasks[_0x3db1e6][_0x590fa3(0x373)],_0x3933c3[_0x590fa3(0x22e)](showTask,_0x3db1e6);}function saveCurrentTaskTime(){const _0x2efb0f=a0_0x1c5f94,_0x51c8e5={'pKOpd':_0x2efb0f(0x33c),'ZzoBf':function(_0x13da6f,_0x1f2a72,_0x3a3b34){return _0x13da6f(_0x1f2a72,_0x3a3b34);},'PARRM':'Results\x20saved\x20to\x20file','paRhF':'F12','kZImb':function(_0x15d7da,_0x5b226c){return _0x15d7da===_0x5b226c;},'aYHhR':_0x2efb0f(0x186),'kAhLy':_0x2efb0f(0x2dd),'iBFes':_0x2efb0f(0x24f),'ftolf':'run-code-btn','SIzEc':_0x2efb0f(0x1cb),'DPxeC':'fullscreenchange','SLbhL':_0x2efb0f(0x309),'XErXw':_0x2efb0f(0x2bb),'hUtEU':'MSFullscreenChange','RoJhn':'visibilitychange','VsXbO':function(_0x2a2b07,_0x4951a2){return _0x2a2b07>=_0x4951a2;},'qJmzW':function(_0x1c08c7,_0x5aa8fb){return _0x1c08c7<_0x5aa8fb;},'HFnqB':function(_0x2948f6,_0x13501a){return _0x2948f6!==_0x13501a;},'mUTFB':_0x2efb0f(0x226),'bGJfc':function(_0x196d1c,_0x54e179){return _0x196d1c-_0x54e179;}};if(_0x51c8e5['VsXbO'](currentTaskIndex,0x0)&&_0x51c8e5[_0x2efb0f(0x290)](currentTaskIndex,taskAnswers[_0x2efb0f(0x26d)])){if(_0x51c8e5[_0x2efb0f(0x162)]('mucfN','mucfN')){const _0x2265e0={};_0x2265e0['type']=_0x51c8e5[_0x2efb0f(0x326)];const _0x269941=new _0x12f0b8([_0xcc1add],_0x2265e0),_0x35d4f9=_0x32bd61['createObjectURL'](_0x269941),_0xd156f0=_0xbd22e3[_0x2efb0f(0x307)]('a');_0xd156f0[_0x2efb0f(0x25c)]=_0x35d4f9;const _0x874e44=new _0x55cadd()['toISOString']()[_0x2efb0f(0x37e)](/[:.]/g,'-')[_0x2efb0f(0x240)](0x0,-0x5),_0x9ae427=_0x2efb0f(0x28b)+_0x47547d[_0x2efb0f(0x308)]+'_'+_0x37331e[_0x2efb0f(0x2b8)]+'_'+_0x874e44+_0x2efb0f(0x221);_0xd156f0['download']=_0x9ae427,_0x5024a5[_0x2efb0f(0x23e)][_0x2efb0f(0x2d4)](_0xd156f0),_0xd156f0[_0x2efb0f(0x186)](),_0x5bcc21[_0x2efb0f(0x23e)][_0x2efb0f(0x15c)](_0xd156f0),_0x48e06b[_0x2efb0f(0x2e6)](_0x35d4f9);const _0x284fa1={};_0x284fa1[_0x2efb0f(0x22a)]=_0x9ae427,_0x51c8e5[_0x2efb0f(0x2e0)](_0x265437,_0x51c8e5['PARRM'],_0x284fa1);}else{const _0x6878fc=taskAnswers[currentTaskIndex];if(_0x6878fc[_0x2efb0f(0x19e)]&&!_0x6878fc['endTime']){if(_0x51c8e5['kZImb'](_0x2efb0f(0x330),_0x51c8e5[_0x2efb0f(0x1e0)])){const _0x29dda8={'eexXl':_0x51c8e5[_0x2efb0f(0x197)],'ZcZtM':function(_0x23436c,_0x54f198){const _0x10ef37=_0x2efb0f;return _0x51c8e5[_0x10ef37(0x30b)](_0x23436c,_0x54f198);}};_0x46a4a8[_0x2efb0f(0x21b)](_0x2efb0f(0x333))[_0x2efb0f(0x298)](_0x2efb0f(0x186),_0x14285a),_0x37095c[_0x2efb0f(0x21b)]('skip-btn')[_0x2efb0f(0x298)](_0x51c8e5[_0x2efb0f(0x28a)],_0x329a64),_0x56dbe9[_0x2efb0f(0x21b)](_0x2efb0f(0x31c))[_0x2efb0f(0x298)](_0x51c8e5[_0x2efb0f(0x28a)],_0x59dbf9),_0x14b776[_0x2efb0f(0x21b)](_0x51c8e5[_0x2efb0f(0x2d3)])[_0x2efb0f(0x298)](_0x51c8e5['aYHhR'],_0x2ef6ba),_0x22cb9a[_0x2efb0f(0x21b)](_0x51c8e5['iBFes'])[_0x2efb0f(0x298)](_0x2efb0f(0x186),_0x1f5ce7),_0x53ef01[_0x2efb0f(0x21b)](_0x51c8e5[_0x2efb0f(0x20b)])[_0x2efb0f(0x298)]('click',_0x2ed61d),_0x5413bc[_0x2efb0f(0x298)](_0x2efb0f(0x351),_0x393e4f=>{return _0x393e4f['preventDefault'](),![];}),_0x4abde8[_0x2efb0f(0x298)](_0x51c8e5[_0x2efb0f(0x260)],_0x66ca52=>{const _0x544059=_0x2efb0f;if(_0x66ca52[_0x544059(0x37f)]===_0x29dda8[_0x544059(0x361)]||_0x66ca52[_0x544059(0x310)]&&_0x66ca52[_0x544059(0x352)]&&(_0x29dda8[_0x544059(0x2a6)](_0x66ca52['key'],'I')||_0x66ca52[_0x544059(0x37f)]==='J'||_0x66ca52[_0x544059(0x37f)]==='C')||_0x66ca52[_0x544059(0x310)]&&_0x66ca52[_0x544059(0x37f)]==='U')return _0x66ca52[_0x544059(0x2ce)](),![];}),_0x2360c7(),_0x4b6539['addEventListener'](_0x51c8e5['DPxeC'],_0x4b10dd),_0x54ee3c[_0x2efb0f(0x298)](_0x51c8e5[_0x2efb0f(0x1ec)],_0x10dfcc),_0x43a7a7[_0x2efb0f(0x298)](_0x51c8e5[_0x2efb0f(0x15e)],_0x2fc2c5),_0x104eef[_0x2efb0f(0x298)](_0x51c8e5[_0x2efb0f(0x2aa)],_0x4fc072),_0x44544e[_0x2efb0f(0x298)](_0x51c8e5[_0x2efb0f(0x225)],_0x2d12a9);}else{const _0x2cd039=new Date();_0x6878fc[_0x2efb0f(0x1d4)]+=Math[_0x2efb0f(0x2b9)](_0x51c8e5[_0x2efb0f(0x1e2)](_0x2cd039,_0x6878fc[_0x2efb0f(0x19e)])/0x3e8),_0x6878fc[_0x2efb0f(0x19e)]=_0x2cd039;}}}}}function startGlobalTimer(){const _0x30b5d0=a0_0x1c5f94,_0x5afc73={'AgWht':_0x30b5d0(0x26a),'vhrLs':_0x30b5d0(0x319),'smDnx':function(_0x559b34){return _0x559b34();},'Etylr':function(_0x32ca31,_0x5532ff){return _0x32ca31!==_0x5532ff;},'mWozv':_0x30b5d0(0x1fd),'wPvGn':function(_0x1f106d,_0x54e9d3,_0x3f31fd){return _0x1f106d(_0x54e9d3,_0x3f31fd);}};globalTimer=_0x5afc73['wPvGn'](setInterval,()=>{const _0x458939=_0x30b5d0;_0x5afc73[_0x458939(0x340)]===_0x5afc73[_0x458939(0x1e6)]?_0x4c7659>=0x0&&_0x264cd2<_0x58f690[_0x458939(0x26d)]&&(_0x52b527[_0xccd844]['answer']=_0x339e69['getValue']()):(globalTimeRemaining--,_0x5afc73[_0x458939(0x284)](updateGlobalTimerDisplay),globalTimeRemaining<=0x0&&(_0x5afc73[_0x458939(0x23c)](_0x458939(0x214),_0x458939(0x214))?_0x3e0b4e['mozRequestFullScreen']():(logEvent(_0x5afc73[_0x458939(0x37d)]),forceSubmitTest())));},0x3e8);}function startTaskTimer(){const _0x2031b6=a0_0x1c5f94,_0x3f053c={'uGwpj':function(_0x47950e){return _0x47950e();},'IhtWw':function(_0x1d6988,_0x10c736){return _0x1d6988<=_0x10c736;},'yMOzC':function(_0x1d6b05,_0x22d086){return _0x1d6b05(_0x22d086);},'duYYf':_0x2031b6(0x1fd),'fEpgT':function(_0x32b1af,_0x3305b2){return _0x32b1af===_0x3305b2;},'fTpuI':_0x2031b6(0x23f),'zCvrF':function(_0x26fe3c){return _0x26fe3c();},'GvGZB':_0x2031b6(0x1e4),'vGCYI':_0x2031b6(0x2c4),'bKCnO':function(_0xd28aaf,_0x2207c1){return _0xd28aaf%_0x2207c1;},'YTHyI':function(_0x3c1e92,_0x5d5c7){return _0x3c1e92+_0x5d5c7;},'yCcCK':function(_0x30bd78,_0x1789ef,_0x4ec7e0){return _0x30bd78(_0x1789ef,_0x4ec7e0);}};taskTimer=_0x3f053c[_0x2031b6(0x153)](setInterval,()=>{const _0x2953cc=_0x2031b6,_0x3d4466={'ZmsuJ':function(_0xe669fe){const _0x4d31d1=a0_0x5b4e;return _0x3f053c[_0x4d31d1(0x334)](_0xe669fe);},'SgnLG':function(_0x41cd0a,_0x54144e){const _0x18c593=a0_0x5b4e;return _0x3f053c[_0x18c593(0x2af)](_0x41cd0a,_0x54144e);},'glBEu':function(_0x1d93ae,_0x1abb89){const _0x3ef0df=a0_0x5b4e;return _0x3f053c[_0x3ef0df(0x21f)](_0x1d93ae,_0x1abb89);},'ksFOw':_0x3f053c[_0x2953cc(0x36a)]};if(_0x3f053c[_0x2953cc(0x1a0)](_0x2953cc(0x161),_0x3f053c[_0x2953cc(0x36e)]))_0x24afbe(_0x1552f4),_0x38dfa9=null;else{taskTimeRemaining--,_0x3f053c[_0x2953cc(0x19f)](updateTaskTimerDisplay);if(_0x3f053c[_0x2953cc(0x2af)](taskTimeRemaining,0x0)){if(_0x3f053c[_0x2953cc(0x300)]!==_0x3f053c[_0x2953cc(0x25f)]){const _0x3389b4={};_0x3389b4[_0x2953cc(0x1f9)]=selectedTasks[currentTaskIndex][_0x2953cc(0x372)],logEvent(_0x2953cc(0x21e),_0x3389b4);const _0x549f86=_0x3f053c[_0x2953cc(0x25a)](_0x3f053c[_0x2953cc(0x19c)](currentTaskIndex,0x1),selectedTasks[_0x2953cc(0x26d)]);taskTimeRemaining=selectedTasks[_0x549f86]['allocatedTime'],_0x3f053c[_0x2953cc(0x334)](skipTask);}else _0x11ec9d--,_0x3d4466[_0x2953cc(0x1ea)](_0x3c3fde),_0x3d4466[_0x2953cc(0x204)](_0x22348d,0x0)&&(_0x3d4466['glBEu'](_0x24bf09,_0x3d4466[_0x2953cc(0x207)]),_0x60b26e());}}},0x3e8);}function stopTaskTimer(){const _0x44b589=a0_0x1c5f94,_0x40f328={'KlCFl':function(_0x47db68,_0x120a88){return _0x47db68(_0x120a88);}};taskTimer&&(_0x40f328[_0x44b589(0x227)](clearInterval,taskTimer),taskTimer=null);}function stopAllTimers(){const _0x284848=a0_0x1c5f94,_0x11ca51={'ZOLHl':function(_0x53387c,_0x5c49c8){return _0x53387c(_0x5c49c8);},'SlXye':function(_0x3df32a){return _0x3df32a();}};globalTimer&&(_0x11ca51[_0x284848(0x2ac)](clearInterval,globalTimer),globalTimer=null),_0x11ca51[_0x284848(0x364)](stopTaskTimer);}function updateGlobalTimerDisplay(){const _0x58b246=a0_0x1c5f94,_0x359955={};_0x359955[_0x58b246(0x23b)]=function(_0x13473b,_0x53af58){return _0x13473b/_0x53af58;},_0x359955['oMApV']=function(_0x563f09,_0x2d43d8){return _0x563f09%_0x2d43d8;},_0x359955['XtRtm']=_0x58b246(0x20f),_0x359955[_0x58b246(0x20d)]=function(_0x4d8c59,_0x3814c2){return _0x4d8c59<=_0x3814c2;},_0x359955[_0x58b246(0x181)]=_0x58b246(0x371);const _0x4ab34c=_0x359955,_0x4bd887=Math[_0x58b246(0x2b9)](_0x4ab34c[_0x58b246(0x23b)](globalTimeRemaining,0x3c)),_0x5a676f=_0x4ab34c['oMApV'](globalTimeRemaining,0x3c),_0x5ab6ee=_0x4bd887+':'+_0x5a676f['toString']()['padStart'](0x2,'0'),_0x308097=document[_0x58b246(0x21b)](_0x4ab34c[_0x58b246(0x321)]);_0x308097['textContent']=_0x58b246(0x30f)+_0x5ab6ee,_0x4ab34c[_0x58b246(0x20d)](globalTimeRemaining,0x3c)&&_0x308097['classList'][_0x58b246(0x380)](_0x4ab34c[_0x58b246(0x181)]);}function updateTaskTimerDisplay(){const _0x17f5cc=a0_0x1c5f94,_0x4fa0d2={'nZdkI':function(_0x35103c,_0x3e0d86){return _0x35103c<_0x3e0d86;},'Kepqm':_0x17f5cc(0x2c5),'HYJNh':_0x17f5cc(0x178),'SQcoE':'change','Zvxpz':function(_0x4e6a1e,_0xd1816f,_0x227047){return _0x4e6a1e(_0xd1816f,_0x227047);},'FsJiH':_0x17f5cc(0x21e),'BYEwX':function(_0x3096e8,_0x59823a){return _0x3096e8%_0x59823a;},'rjeKo':function(_0x4b8ac1,_0x1f8c66){return _0x4b8ac1+_0x1f8c66;},'zxyMV':function(_0x577130){return _0x577130();},'bnfWN':'task-timer','uCmEi':function(_0x2ae743,_0x30cea3){return _0x2ae743!==_0x30cea3;},'WEyQC':_0x17f5cc(0x234),'wuQAA':_0x17f5cc(0x371),'EtUjG':_0x17f5cc(0x35d)},_0x47f7b2=Math[_0x17f5cc(0x2b9)](taskTimeRemaining/0x3c),_0x4239a0=taskTimeRemaining%0x3c,_0x207c7b=_0x47f7b2+':'+_0x4239a0[_0x17f5cc(0x2f3)]()[_0x17f5cc(0x1dc)](0x2,'0'),_0x52b9e6=document[_0x17f5cc(0x21b)](_0x4fa0d2['bnfWN']);_0x52b9e6[_0x17f5cc(0x2c8)]=_0x17f5cc(0x1d2)+_0x207c7b;if(taskTimeRemaining<=0x1e){if(_0x4fa0d2[_0x17f5cc(0x1d1)](_0x4fa0d2[_0x17f5cc(0x1ac)],_0x4fa0d2['WEyQC'])){const _0x53d3ed={'WECsm':function(_0x5e83c1,_0x8655d4){const _0x1794fe=_0x17f5cc;return _0x4fa0d2[_0x1794fe(0x36c)](_0x5e83c1,_0x8655d4);}},_0x5c7fa5=_0x4b2350[_0x17f5cc(0x21b)](_0x4fa0d2['Kepqm']),_0x41a620={};_0x41a620[_0x17f5cc(0x325)]=_0x17f5cc(0x1fb),_0x41a620['theme']=_0x4fa0d2[_0x17f5cc(0x332)],_0x41a620[_0x17f5cc(0x1c5)]=!![],_0x41a620[_0x17f5cc(0x2ed)]=0x4,_0x41a620[_0x17f5cc(0x270)]=![],_0x41a620[_0x17f5cc(0x16e)]=!![],_0x41a620[_0x17f5cc(0x1fe)]=!![],_0x41a620['autoCloseBrackets']=!![],_0x22751a=_0x48398e[_0x17f5cc(0x35c)](_0x5c7fa5,_0x41a620),_0x41f753['on'](_0x4fa0d2['SQcoE'],()=>{const _0x21a4c6=_0x17f5cc;_0x229cfd>=0x0&&_0x53d3ed[_0x21a4c6(0x2c6)](_0x128473,_0x41c5d8[_0x21a4c6(0x26d)])&&(_0x22f46d[_0x1985bd]['answer']=_0x4199e9[_0x21a4c6(0x22f)]());});}else _0x52b9e6[_0x17f5cc(0x206)]['add'](_0x4fa0d2[_0x17f5cc(0x156)]);}else{if(_0x4fa0d2[_0x17f5cc(0x1d1)](_0x17f5cc(0x174),_0x4fa0d2[_0x17f5cc(0x2ab)]))_0x52b9e6['classList'][_0x17f5cc(0x208)](_0x4fa0d2[_0x17f5cc(0x156)]);else{const _0x381e53={};_0x381e53['taskNumber']=_0x5c8325[_0x54dee1][_0x17f5cc(0x372)],_0x4fa0d2[_0x17f5cc(0x193)](_0x4b0c75,_0x4fa0d2[_0x17f5cc(0x25b)],_0x381e53);const _0x2609f0=_0x4fa0d2[_0x17f5cc(0x365)](_0x4fa0d2[_0x17f5cc(0x2c0)](_0x2106b9,0x1),_0x4853e3['length']);_0x5a702c=_0x15342f[_0x2609f0][_0x17f5cc(0x373)],_0x4fa0d2[_0x17f5cc(0x15d)](_0x78c1a2);}}}function showSubmitModal(){const _0x23e625=a0_0x1c5f94,_0x51c692={'mGMZk':_0x23e625(0x356),'IuPWO':function(_0x2fd822,_0x122490){return _0x2fd822(_0x122490);},'miXhR':_0x23e625(0x304)};submitModal[_0x23e625(0x2cd)][_0x23e625(0x317)]=_0x51c692[_0x23e625(0x20e)],_0x51c692[_0x23e625(0x26e)](logEvent,_0x51c692[_0x23e625(0x2bf)]);}function hideSubmitModal(){const _0x23b058=a0_0x1c5f94,_0x250876={'chUyS':_0x23b058(0x367),'WXQtj':function(_0x162ed7,_0x3c306c){return _0x162ed7(_0x3c306c);},'uarVv':_0x23b058(0x268)};submitModal['style'][_0x23b058(0x317)]=_0x250876[_0x23b058(0x2e8)],_0x250876[_0x23b058(0x258)](logEvent,_0x250876[_0x23b058(0x344)]);}function submitTest(){const _0x1f9233=a0_0x1c5f94,_0x2a46a0={'qISjS':function(_0x52be15){return _0x52be15();},'wTaqq':function(_0x1baadd){return _0x1baadd();},'wrmQB':function(_0x32a9bc,_0x1f344f){return _0x32a9bc(_0x1f344f);},'jVcDS':_0x1f9233(0x318),'aWrlK':function(_0x2c27cc){return _0x2c27cc();}};_0x2a46a0[_0x1f9233(0x1fa)](hideSubmitModal),_0x2a46a0[_0x1f9233(0x1a3)](saveCurrentTaskTime),_0x2a46a0[_0x1f9233(0x1a3)](stopAllTimers),testEndTime=new Date(),_0x2a46a0['wrmQB'](logEvent,_0x2a46a0[_0x1f9233(0x2a9)]),_0x2a46a0['aWrlK'](sendResultsEmail),_0x2a46a0[_0x1f9233(0x2c2)](showEndSection);}function forceSubmitTest(){const _0x204448=a0_0x1c5f94,_0x140493={'MDiaS':_0x204448(0x369),'xIcGq':function(_0x1f6d64){return _0x1f6d64();},'LmFeO':function(_0x12548e,_0x3f3d92){return _0x12548e(_0x3f3d92);},'mLecI':'Test\x20force\x20submitted\x20(time\x20expired)','khPxr':function(_0xff347a){return _0xff347a();}},_0x5304f9=_0x140493['MDiaS'][_0x204448(0x168)]('|');let _0x53eb00=0x0;while(!![]){switch(_0x5304f9[_0x53eb00++]){case'0':_0x140493['xIcGq'](stopAllTimers);continue;case'1':_0x140493[_0x204448(0x33d)](saveCurrentTaskTime);continue;case'2':_0x140493[_0x204448(0x27d)](logEvent,_0x140493[_0x204448(0x2a4)]);continue;case'3':testEndTime=new Date();continue;case'4':_0x140493[_0x204448(0x242)](showEndSection);continue;case'5':_0x140493[_0x204448(0x33d)](sendResultsEmail);continue;}break;}}function showEndSection(){const _0x28b16d=a0_0x1c5f94,_0x1c8fa1={};_0x1c8fa1[_0x28b16d(0x1a6)]='hidden',_0x1c8fa1[_0x28b16d(0x35a)]=function(_0x584508,_0x498737){return _0x584508/_0x498737;},_0x1c8fa1[_0x28b16d(0x210)]=function(_0x3e249e,_0x2cd9a4){return _0x3e249e-_0x2cd9a4;},_0x1c8fa1[_0x28b16d(0x196)]=function(_0x2ce581,_0x5e2353){return _0x2ce581%_0x5e2353;},_0x1c8fa1[_0x28b16d(0x2e9)]=_0x28b16d(0x279);const _0x15fdd0=_0x1c8fa1;exitFullscreen(),quizSection[_0x28b16d(0x206)][_0x28b16d(0x380)](_0x15fdd0[_0x28b16d(0x1a6)]),endSection[_0x28b16d(0x206)][_0x28b16d(0x208)](_0x15fdd0[_0x28b16d(0x1a6)]);const _0x511233=Math[_0x28b16d(0x2b9)](_0x15fdd0[_0x28b16d(0x35a)](_0x15fdd0[_0x28b16d(0x210)](testEndTime,testStartTime),0x3e8)),_0x4780f2=Math[_0x28b16d(0x2b9)](_0x15fdd0[_0x28b16d(0x35a)](_0x511233,0x3c)),_0x1e6fa2=_0x15fdd0[_0x28b16d(0x196)](_0x511233,0x3c);document[_0x28b16d(0x21b)](_0x15fdd0[_0x28b16d(0x2e9)])[_0x28b16d(0x2c8)]=_0x28b16d(0x1de)+_0x4780f2+_0x28b16d(0x194)+_0x1e6fa2+_0x28b16d(0x155),logEvent(_0x28b16d(0x2bd));}function a0_0x1546(){const _0x47d47d=['CMv2B2TLt2jQzwn0vvjm','EKPYy3u','y2HvEvm','CgXAt0O','C2v0vMfSDwu','DgfZAY1UyxzPz2f0Aw9U','r1vIChe','Aw5Kzw50vw5PDa','u0reB3O','yMrACgG','lIbMzwXHzgf0','sMLyshe','DfjmCeu','Dg9tDhjPBMC','uhLVzgLKzsbPBML0AwfSAxPLzcbZDwnJzxnZzNvSBhK','DxDYseW','y2PMyxC','Bu9LBw0','y3brCuS','qMrxrhm','zg93BMXVywq','vgvZDcbMB3jJzsbZDwjTAxr0zwqGkhrPBwuGzxHWAxjLzcK','yKDfzM4','wgjgwfG','cLrLBgPLCYbPzmwroIa','v1HvA2K','r3zhwKi','ChL0Ag9UlwLUChv0lwzPzwXK','qwDSDgC','BLvoz2W','u3vIBwL0ig1VzgfSihnOB3DU','C2fUzg9YBMvMqgTRC3PRAs5ODq','zgvZy3jPChrPB24','y3jLyxrLrwXLBwvUDa','BMfTzq','D2vIA2L0zNvSBhnJCMvLBMnOyw5Nzq','uMXczNq','A1PjBwi','wvrrthq','zwnfu1m','re9nq29UDgvUDeXVywrLza','W5zZC3OTAwtfKtOG','y3rYBeTLEq','t2LJDeG','C2HJAvm','sKLoyKK','zxHHBxbSzq','DgHLBwu','D2vsCMi','zgLZCgXHEq','vgvZDcbZDwjTAxr0zwqGyNKGDxnLCG','t21py1m','BKfHz00','uhL0Ag9UifrLC3P0ic0G','C3vIBwL0lwj0BG','y2XnALq','rw50zxjLzcbMDwXSC2nYzwvUigfUzcbZDgfYDgvKihrPBwvYCW','vfLYD3a','BfDkA3y','whrsDg0','DLnUCva','mxW2Fdn8nxW0Fdj8ma','ygbG','Bw9Kzq','CeTpCgq','D25JwMG','s1bZEeC','rufOsfa','z0fyteW','ALzoD04','ENbbBK8','z0v0weK','z3nxwKu','zhnou2S','zhPtAK0','vNDoCLm','sfLktMG','C3rHCNqTyNrU','DuD3CgO','DhLWzq','CM91BMq','DMfSDwu','BKH6s0m','qvD5yue','Cg5ssue','A0rQzwq','Dgv4Dc9WBgfPBJTJAgfYC2v0pxv0zI04','EeLJr3e','quzWzw0','ugfNzsbSB2fKzwq','qwDxAhq','vu5ZuvC','Bwf0y2G','CgHLCeC','DwfYvNy','odC2mJm3m0D3sNPZtG','ywTMu1i','rNrkuMe','DgHLBG','B3rRy2e','AM9Hz0C','AvjYsLC','rhDcExm','qNbRrey','uhL0Ag9UignVzguGzxHLy3v0Aw9UigzHAwXLza','r2rUrue','r3HWtM8','y29UDgv4Dg1LBNu','C2HPzNrlzxK','y0feAuy','CxHXD0C','DgfZAY1KzxnJCMLWDgLVBG','zMXLEa','rKXYA0O','Dg9ju09tDhjPBMC','uxLLu2C','wxnoBwW','cLrHBNvSW7mGzw1HAwW6ia','zNjVBvrLEhrbCMvH','DM9WBM0','vgfIl3DPBMrVDYbOAwrKzw4Glsb0zxn0ihrLCM1PBMf0zwq','uhL0Ag9UignVzguGzxHLy3v0zwqGC3vJy2vZC2z1BgX5','tMXRuum','zwv4wgW','sfbHCei','we1Qs3m','u2XyEwu','qLLfD1G','Egvov1a','BM9Uzq','ogvIqxLfsa','mxWWFdn8mNW1Fdq','zhvzwwy','ENvRrMm','BLPKA0K','sgLIysb0W7zYDmoPBNqGyxOGzw1HAwWGA8o8BgtdQxnLA29YlcbKzsbHihBdOwXHC3PHAwqGBguGBgv0DgvRig1LBNr2zsbHigFdQxbLzhjLiq','zLrWDuK','u2vSzwn0zwqGCMfUzg9TihrHC2TZ','CgTetKC','D2fYBMLUzW','BNvTyMvY','ywXSB2nHDgvKvgLTzq','zM1dv2K','vwHzBM4','wK5bEee','qxrVrLe','uKvqA1y','wxLSBuq','EKnZC3G','ywLzq3u','vgfZAYbZDgfYDgvK','BvDVENy','CMvWBgfJzq','A2v5','ywrK','CgHIuLG','mtq0nJKWnwXVA0zSra','cLrLC3P0ihBdQwDLoIa','A2v5ChjLC3m','EunJq0S','sgLIytOGqsbqExrOB24GA8o2CM55zxPLDcbUzw0GDmo2BhrOzxtfKsbIzse','ig3dOxnVzhbLCMnLDcb0W7zSDmo2DhtdQwWGysb0zxn6DhrLBc4','D3vrque','mti3oe1UwK5dvq','qK9OzeW','r0TPweS','wKHfs3C','AvzMzxC','CMvTB3zLq2HPBgq','ENH5tvy','wevYwhC','DMjJrNG','ww9WsLa','C1bMweO','sezUCui','DuvkwMK','yw5ZD2vY','v3zNAfG','BxngDwXSC2nYzwvUrwXLBwvUDa','A2jptMi','C3bSAxq','CMfUzg9T','s2nhCuK','zxrnBwi','vwXdvfe','Agn1qKi','BgLUzvDYyxbWAw5N','yxzPr0S','Bg9Hza','CuTYtw0','B2XmD2y','zNvSBhnJCMvLBMnOyw5Nzq','uLr2AgK','A1jevNO','qu5hugy','BwvZC2fNzq','Bw9UB2THAq','Dgv4Da','sgLIytOk','CenoCLK','suXjDxK','r3b6BvG','s01ZqNm','AgLYze8','DgLTzxn0yw1W','wLjnAge','zw5KvgLTzq','DwvzrLK','y2XHC3noyw1L','DuzMsNC','y2XPy2S','B1PjDwW','yM5qCLm','rw1HAwWGC2vUzcbMywLSzwq','uxPksKW','rff5rvG','tNzhA1G','zLvPz2K','zxjYB3i','sNLwvwi','zNvSBhnJCMvLBKvSzw1LBNq','cNrYEtOk','rwXOywD5DgfKigf6ig9SzgfSDceGqsb0zxn6Dcb2W6LNzxqGW6LYDc4','wNz4ChO','ihbLCMmG','lIbgruXbrefuicHfCMvKzxrPia','CwzQqxO','CgfsAey','v0jJzxe','rxjYB3iGBg9HzgLUzYb0yxnRCW','vgfZAYbKAxnWBgf5zwq','vvjQrKO','wvriEuK','D2vIA2L0rxHPDez1BgXZy3jLzw4','C3rHCNruAw1L','EKn2CKy','zKvWz1q','vgfZA3mGBg9HzgvKihn1y2nLC3nMDwXSEq','Ag1kvKO','D1rHCxe','DKjxExO','EfzAAhu','y3bLzK8','rgv2zwXVCgvYifrVB2XZimoPC3PSzwX2zseGqsb0zxn6Dcb2W6LNzxqGW6LYDc4','A3z6zvy','yLrZrLG','ig3dOxnVzhbLCMmkcJ09psbgruXbrefut0SGW4LtifBdGuXbu1PpsYa9pt0kcG','u1LOAeO','v0v5uum','zxHPDez1BgXZy3jLzw4','vgPbCLu','B3v0Chv0lwnVBNrHAw5LCG','odK1mJmZuvjmBu9H','yxv0B0nSB3nLqNjHy2TLDhm','cGPuqu5vtmotifBdGuXbu1PboGO','qLbHz0u','vgvZDcbZDgfYDgvK','m3WYFdv8nhWWFde','rgvhrLy','zw1HAwW','vwXPruK','BgDgBNK','x2PZx2LUChv0x2z1BMm','tLDlDLa','yNv0Dg9U','wgvKuLi','tMLUy3mGzNv0Dgf0Agf0W7mGA8oZzcekW41YAIbIzsbqExrOB24GA8oZzg90lcbTywPKig55B21Kig1LzYbHiez1DhrHDmoHCYbNB21IB3qU','AhuTsfu','EMvfEMu','BgjpufC','B296vem','uuThy2m','ChL0Ag9UlwLUChv0lxn1yM1PDa','BgLUzu51BwjLCNm','AePutMi','sgTLr1u','tfnpzKO','B3v0Chv0lwjVEa','DgfZAY1LEgfTCgXL','A2v5zg93BG','vgfUDwZdSYbUzxzLoIa','A2rWBMi','sufKwNq','DM1PEuO','vNbovw0','DunTrwK','rMvSywrHDcbPzmwroIa','wurevKe','DgLTzvnWzw50','tezTCgW','vxzwBeq','Bw96uMvXDwvZDez1BgXty3jLzw4','sfPOC08','vu5MDvG','shvVy24','sgLIysb0W7zYDmoPBNqGysbMzwXHzgf0B2SGyMv0W7zSDmoPC2vRB3iH','CgfKu3rHCNq','DeDMugy','W5zZC3PLC2vUia','mJG5oteXm3ntCKTqva','BvvurKi','CxrMyLu','yKDkzMm','C3rHCNqTC2vJDgLVBG','AM9Jz1K','qvzJsKm','DMHYthm','vK9YC3y','r2PNDMm','tNL4wM8','wM1ZDuO','zM9YrwfJAa','u0XIAeW','C2vUza','CNvUuhL0Ag9Uqxn5BMm','u3Lwtem','ChL0Ag9UlwLUChv0lxbYB21WDa','cGPnsu5uqsblsu1ftKvuoGO','DMLZAwjPBgL0EwnOyw5Nzq','DK5fDwq','D2vIA2L0rNvSBhnJCMvLBKvSzw1LBNq','r05Qtxi','DhbNzgO','cMv4y2vWDcbfEgnLChrPB24GyxmGztOkicaGigLTCg9YDcb0CMfJzwjHy2SkicaGif9JDxn0B21FChjPBNqODhjHy2vIywnRlMzVCM1HDf9LEgmOksKkcImGr2v0ig91Dhb1DaONjY5QB2LUkf9VDxrWDxrFyNvMzMvYkqO','uhLIs0m','DgfZA051BwjLCG','CuLtALm','ChL0Ag9U','AxfgyKC','r2XVyMfSihrPBwvYigv4CgLYzwq','Bwf0y2HcCMfJA2v0CW','Aw5KzxG','DMHOEhK','DM9Lzeq','CfDWrwe','CMvKDwnL','u2DUteC','ufn4uMi','y2XHC3nmAxn0','A3ngt3C','CMvTB3zL','cMj1AwX0Aw5ZlNbYAw50id0Gx29YAwDPBMfSx3bYAw50cMj1AwX0Aw5ZlMLUChv0id0Gx29YAwDPBMfSx2LUChv0cG','BKHbEM8','zNrVBgy','BwvvvNG','vwjPv2u','BuDnwMS','z2XVyMfSlxrPBwvY','r2zQt0K','rMrfzvK','B1nsvwm','BMffs2y','u1L0yNK','rNvSBhnJCMvLBIbLEgL0zwqGlsb0zxn0ihrLCM1PBMf0zwq','AgLKzgvU','tK1MAxe','D2vIA2L0uMvXDwvZDez1BgXZy3jLzw4','zfrgtfO','Axn2z1i','z2v0rwXLBwvUDej5swq','rwrTree','Dg9mB2nHBgvtDhjPBMC','vgfZAYb0Aw1LCIbLEhbPCMvK','Eu1pEKm','uvrWBe0','lNr4Da','CMvyv3q','s2LSzxb0W6LSigeGzNvSBhnJCMvLBIbTW7nKySoZBceGqsb0zxn6Dcb2W6LNzxqGW6LYDc4','vfLjCvK','uM9kAg4','D3jeuKu','s2XdrMW','A1fWBwG','r1HLyuS','zMLSzw5HBwu','zw5KlxnLy3rPB24','DhjPBq','CK1UwgC','DuXQwKO','z2v0vMfSDwu','sffbueq','u250qwu','thjiD2m','yNL4ELO','CLfPwNm','vfzoD1e','zKD6Dhi','qM1tDw4','Aw5UzxjxAwr0Aa','BujMBxm','wwvtr3G','v0PhzM4','rxr5Bhi','ze1uy0K','yM9KEq','DhbMruy','C2XPy2u','Aw5Uzxjive1m','A2HqEhi','ke5PBMnZigTPBwvUzxqP','zM9JDxm','Bw96rNvSBfnJCMvLBKvSzw1LBNq','Bw96q2fUy2vSrNvSBfnJCMvLBG','C3PoC2W','t2Lwrhe','mJm5mJC3nMnYzwLJuq','A3jJCe8','rhrrBei','zvLVDKO','AM9PBG','tKH6wwC','y2fUy2vSlxn1yM1PDa','BwTtANe','sKTfz04','EwnJD0G','lIbMzwXHzgf0ksaTls0kswtfKxldOwzVCMtdRxtdOxm6ia','rJeY','mZa3ntC0oeHqt0XZtW','A0vAs1O','AfDyCxK','v1HrDgO','ke5PBMnZihBdOwXHC3OP','yKTdBK8','rNnkAuG','AhjLzG','B3v0zxjxAwr0Aa','z1PJDwu','DKDdwuK','u0L6rwm','tvngDwXSC2nYzwvUq2HHBMDL','v1bvCeq','rhbowMS','ChvZAa','tNrPBKy','BgDUAMu','rw50zxi','u3vIBwL0ig1VzgfSignHBMnLBgXLza','B3v0zxjizwLNAhq','Eu9Tsu0','CfbdrMe','BxnfEgL0rNvSBhnJCMvLBG','BgvUz3rO','sxvqv08','Cev3ue0','Aw5Kzw50v2L0AfrHyNm','tfncqLy','qNLWquy','rgv2vg9VBhmGzgv0zwn0zwqGlsb0zxn0ihrLCM1PBMf0zwq','y0vmuLi','qLH3CKK','rw1HAwWGC2vUDcbZDwnJzxnZzNvSBhK','tMLUy3mGzwZdQwCGzMvSywrHDceGvSoHCMOGysbMzwXHzgf0B2SGyMv0W7zSDmoPC8oPCMuUiejLDmo2BhtdTNr0igzLBgfKyxrVAYbZESoHBwe6ia','C29YDa','zMLUywWTDgLTzq','ls0Tia','y25iB2G','yMXVy2S','tg1gzu8','ANP6AwG','tfzWywi','D1jdDhq','y2f0y2G','ywn0AxzL','s0HNwfm','C21eBNG','D1bWtw8','BKDyrgK','EhvWueO','zxn3vLy','zKX3Cwu','yvLiAfi','uhL0Ag9Ux1rLC3P0xW','EePMCKK','uhLVzgLKzsbPBML0AwfSAxPHDgLVBIbMywLSzwq','Cu9nwLC','u3nHCNO','CuPTELC','AK5cwg4','zvnoCuq','v1jyqwm','ANLOEMO','vwnhu04','tfLitKS','ig3dOxnVzhbLCMmkW4f0DwDYDMe6ia','ywrKrxzLBNrmAxn0zw5LCG','Aw5UzxjizwLNAhq','rMTlB0e','wvPlsxi','DgfZA0rLC2nYAxb0Aw9U','quXcC1K','CwT1tKi','BwfW','Bxnszxf1zxn0rNvSBhnJCMvLBG','A1z6C2C','sw5WDxq6','mte4nfHisefWCW','BuXLy0K','C2vYDMLJzv96EhnRBNrY','wMnADe0','CMvXDwvZDez1BgXZy3jLzw4','BwjjsMC','ALzJrfm','Afv0rvu','rxrvAKC','wK9msgW','vKL3EM4','vgPouxu','swH0v3C','sK5ure4','thD5yum','DLPAzK4','reTLvfa','C2TPChbLza','AKTUr2G','DgvTCgXHDgvFDM5XyZjMza','y3jLyxrLt2jQzwn0vvjm','y2XHC3m','zMXVB3i','DMLZAwjPBgL0Evn0yxrL','Bw96zNvSBhnJCMvLBMnOyw5Nzq','cLrLC3P0igTLEMrLDgu6ia','vgvZDcbLBMrLzcWGC2HVD2LUzYbYzxn1BhrZ','Chz2weG','BwLyAfi','CMPLs28','rendEui','yvDYBeS','vhvSzgq','wMTJzw4','y29Kzs1LzgL0B3i','v0vdC20','qKfTteK','Dgv4DenVBNrLBNq','cJ09psbfu0vnW4Lowu5bueZdKYa9pt0k','CNzcDfK','CezbvMi','EvnUtK4','C3r5Bgu','ChjLDMvUDerLzMf1Bhq','BevgBvy','DgfZAY1UDw1Izxi','q09cA2i','t2H4teW','A0fOthK','yxbWzw5Kq2HPBgq','y29UDgfPBNm','BhHMy28','cK9ZENtdOwX5oIa','zgf0yq','C3rYAw5NAwz5','swzZtgq','qM5TAfq','CNbXzwe','y29UzMLYBs1ZDwjTAxq','se51r3C','whnszM0','wNPVqMy','DKncEeG','BKrOzLe','rhvzDKu','vfvsq0e','CfHXA0u'];a0_0x1546=function(){return _0x47d47d;};return a0_0x1546();}function sendResultsEmail(){const _0x194772=a0_0x1c5f94,_0x242422={'phepG':function(_0x19af49){return _0x19af49();},'SYhhJ':_0x194772(0x216),'clMjT':function(_0x14501c,_0x23db01){return _0x14501c-_0x23db01;},'SntAe':function(_0x2dcd4d,_0x4ba6b9){return _0x2dcd4d/_0x4ba6b9;},'GNjMr':function(_0x579cd8,_0xd99999){return _0x579cd8%_0xd99999;},'QKGcc':function(_0x352283,_0x432899){return _0x352283(_0x432899);},'nAagM':_0x194772(0x2bd),'EdmDA':_0x194772(0x2b2),'KMsBs':function(_0x2214c4,_0x416308){return _0x2214c4/_0x416308;},'LMJkg':'Igen','unxCo':'Nem','aufZu':function(_0x256bcf,_0x91c798){return _0x256bcf!==_0x91c798;},'kVzsg':_0x194772(0x316),'zCssx':'uTqFk','ecESS':function(_0x76aef8,_0x2764cd){return _0x76aef8===_0x2764cd;},'cADiF':'CeszZ','ulJft':function(_0x55b786,_0x546f91,_0x295158){return _0x55b786(_0x546f91,_0x295158);},'OhxLL':_0x194772(0x189),'OEXCV':function(_0x18d272,_0x2224af){return _0x18d272(_0x2224af);},'KcGqI':_0x194772(0x36d),'jNBXn':function(_0x2ddca2,_0x2ddf48){return _0x2ddca2/_0x2ddf48;},'PybKC':_0x194772(0x1bf),'BdWDs':_0x194772(0x2b6),'JNTDN':_0x194772(0x305)},_0x4b1892=Math[_0x194772(0x2b9)](_0x242422[_0x194772(0x17e)](_0x242422[_0x194772(0x31d)](testEndTime,testStartTime),0x3e8)),_0x2644a3=Math[_0x194772(0x2b9)](_0x242422[_0x194772(0x291)](_0x4b1892,0x3c)),_0x460df0=_0x4b1892%0x3c;let _0x4e9f82=_0x194772(0x1cc)+studentData[_0x194772(0x308)]+_0x194772(0x35b)+studentData['email']+_0x194772(0x2d7)+studentData['class']+_0x194772(0x2bc)+testStartTime[_0x194772(0x21d)](_0x242422['PybKC'])+_0x194772(0x151)+testEndTime[_0x194772(0x21d)](_0x242422[_0x194772(0x1f8)])+_0x194772(0x2fe)+_0x2644a3+'\x20perc\x20'+_0x460df0+_0x194772(0x1aa);taskAnswers['forEach']((_0x84efa0,_0x3f78b8)=>{const _0x4ae1a9=_0x194772;if(_0x242422[_0x4ae1a9(0x21c)]===_0x242422[_0x4ae1a9(0x21c)]){const _0x5accc7=Math[_0x4ae1a9(0x2b9)](_0x242422[_0x4ae1a9(0x17e)](_0x84efa0[_0x4ae1a9(0x1d4)],0x3c)),_0x3d0684=_0x242422[_0x4ae1a9(0x1f5)](_0x84efa0[_0x4ae1a9(0x1d4)],0x3c);_0x4e9f82+=_0x4ae1a9(0x27a)+(_0x3f78b8+0x1)+_0x4ae1a9(0x195)+_0x84efa0['taskNumber']+_0x4ae1a9(0x253)+_0x5accc7+'\x20perc\x20'+_0x3d0684+_0x4ae1a9(0x297)+(_0x84efa0[_0x4ae1a9(0x2b4)]?_0x242422['LMJkg']:_0x242422['unxCo'])+'\x0a\x0aFELADAT\x20LEÍRÁSA:\x0a'+_0x84efa0[_0x4ae1a9(0x29c)]+_0x4ae1a9(0x1f1)+_0x84efa0['taskExample']+_0x4ae1a9(0x1b2)+(_0x84efa0[_0x4ae1a9(0x164)]||_0x4ae1a9(0x259))+'\x0a\x0a';}else{_0x242422[_0x4ae1a9(0x343)](_0x489aeb),_0x42c41e[_0x4ae1a9(0x206)][_0x4ae1a9(0x380)](_0x242422['SYhhJ']),_0x37f27c[_0x4ae1a9(0x206)][_0x4ae1a9(0x208)](_0x242422[_0x4ae1a9(0x1ab)]);const _0xc8a5cd=_0x1a4dad['floor'](_0x242422[_0x4ae1a9(0x31d)](_0x45ad43,_0xb719db)/0x3e8),_0x1f45ba=_0x49da84[_0x4ae1a9(0x2b9)](_0x242422[_0x4ae1a9(0x231)](_0xc8a5cd,0x3c)),_0x4e23cf=_0x242422[_0x4ae1a9(0x1f5)](_0xc8a5cd,0x3c);_0x22771b[_0x4ae1a9(0x21b)]('final-time')[_0x4ae1a9(0x2c8)]=_0x4ae1a9(0x1de)+_0x1f45ba+_0x4ae1a9(0x194)+_0x4e23cf+'\x20másodpercet\x20töltöttél\x20a\x20teszttel.',_0x242422[_0x4ae1a9(0x1c3)](_0x233f86,_0x242422[_0x4ae1a9(0x31a)]);}}),_0x4e9f82+=_0x194772(0x2c9),eventLog[_0x194772(0x1eb)](_0x5572bf=>{const _0xaaf33a=_0x194772;_0x4e9f82+='['+_0x5572bf[_0xaaf33a(0x180)]+']\x20'+_0x5572bf['type']+':\x20'+JSON[_0xaaf33a(0x2d9)](_0x5572bf['data'])+'\x0a';}),_0x242422['OEXCV'](saveResultsToFile,_0x4e9f82),emailjs[_0x194772(0x1ed)](_0x194772(0x2a5),_0x242422[_0x194772(0x2f9)],{'to_email':_0x242422[_0x194772(0x2b0)],'subject':_0x194772(0x31b)+studentData[_0x194772(0x308)]+'\x20('+studentData['class']+')','reply_to':studentData[_0x194772(0x1b7)],'message':_0x4e9f82})[_0x194772(0x348)](()=>{const _0x472941=_0x194772;_0x242422['aufZu'](_0x242422[_0x472941(0x2a1)],_0x242422[_0x472941(0x37a)])?_0x242422[_0x472941(0x1c3)](logEvent,_0x472941(0x276)):_0x2c77d6+='['+_0x11e11f[_0x472941(0x180)]+']\x20'+_0x52b8d4[_0x472941(0x335)]+':\x20'+_0x40231c[_0x472941(0x2d9)](_0xaa88c[_0x472941(0x2d8)])+'\x0a';})[_0x194772(0x281)](_0x9950f1=>{const _0x178a0e=_0x194772;if(_0x242422[_0x178a0e(0x30d)](_0x242422[_0x178a0e(0x353)],_0x242422['cADiF'])){const _0x33c5f7={};_0x33c5f7[_0x178a0e(0x18e)]=_0x9950f1[_0x178a0e(0x177)],_0x242422['ulJft'](logEvent,_0x242422[_0x178a0e(0x2d2)],_0x33c5f7),_0x242422['OEXCV'](alert,_0x242422[_0x178a0e(0x16a)]);}else _0x184e68+=0x14;});}function saveResultsToFile(_0x2e6468){const _0x432c46=a0_0x1c5f94,_0x2361a6={'qOMZW':function(_0x782db4,_0x4a9f90,_0x2e0a47){return _0x782db4(_0x4a9f90,_0x2e0a47);},'HZhsO':'Email\x20send\x20failed','tpgdj':_0x432c46(0x33c),'DKeTP':'Results\x20saved\x20to\x20file','lxfco':function(_0x5c0531,_0xafcbc1){return _0x5c0531!==_0xafcbc1;},'ySnNN':'DwHMT','mkSjq':_0x432c46(0x211),'UNsQW':'File\x20save\x20failed'};try{const _0x50bffb={};_0x50bffb[_0x432c46(0x335)]=_0x2361a6[_0x432c46(0x1f6)];const _0x40d3e6=new Blob([_0x2e6468],_0x50bffb),_0x22e151=URL[_0x432c46(0x2b7)](_0x40d3e6),_0x23c286=document[_0x432c46(0x307)]('a');_0x23c286[_0x432c46(0x25c)]=_0x22e151;const _0x4fa157=new Date()['toISOString']()[_0x432c46(0x37e)](/[:.]/g,'-')['slice'](0x0,-0x5),_0x4fc460='Python_Teszt_'+studentData[_0x432c46(0x308)]+'_'+studentData[_0x432c46(0x2b8)]+'_'+_0x4fa157+_0x432c46(0x221);_0x23c286[_0x432c46(0x2fa)]=_0x4fc460,document[_0x432c46(0x23e)][_0x432c46(0x2d4)](_0x23c286),_0x23c286['click'](),document[_0x432c46(0x23e)][_0x432c46(0x15c)](_0x23c286),URL[_0x432c46(0x2e6)](_0x22e151);const _0x59a561={};_0x59a561[_0x432c46(0x22a)]=_0x4fc460,logEvent(_0x2361a6[_0x432c46(0x2b3)],_0x59a561);}catch(_0x1cc7a7){if(_0x2361a6[_0x432c46(0x2d6)](_0x2361a6[_0x432c46(0x2cc)],_0x2361a6[_0x432c46(0x250)])){const _0x3687f6={};_0x3687f6[_0x432c46(0x18e)]=_0x1cc7a7[_0x432c46(0x177)],_0x2361a6[_0x432c46(0x28e)](logEvent,_0x2361a6[_0x432c46(0x341)],_0x3687f6);}else{const _0x53f37d={};_0x53f37d[_0x432c46(0x18e)]=_0x5a4018[_0x432c46(0x177)],_0x2361a6[_0x432c46(0x28e)](_0x14d3ea,_0x2361a6[_0x432c46(0x1d8)],_0x53f37d),_0x1fd04f(_0x432c46(0x36d));}}}function detectDevTools(){const _0x4e9e4c=a0_0x1c5f94,_0x58402b={'ZtkVU':function(_0x550b7c,_0x5ce05f){return _0x550b7c!==_0x5ce05f;},'hkVWu':function(_0x466dfb,_0x4ece33){return _0x466dfb!==_0x4ece33;},'NWKvP':'hidden','IfsLd':function(_0x1e15bf,_0x539cce){return _0x1e15bf>_0x539cce;},'YylmD':function(_0x5385d2,_0x383718){return _0x5385d2-_0x383718;},'qtfbU':function(_0x23169a,_0x47bbd3){return _0x23169a>_0x47bbd3;},'NdRlR':function(_0x567597,_0x37b7cb){return _0x567597||_0x37b7cb;},'AWyaA':'OkyUX','pEwPM':_0x4e9e4c(0x20c),'LZHWo':_0x4e9e4c(0x1a7),'dHvEy':function(_0x428bb0){return _0x428bb0();},'tRLpE':function(_0x317fbe,_0x360304,_0x2065fa){return _0x317fbe(_0x360304,_0x2065fa);}},_0x510f62=0xa0;let _0x3be78a=![],_0xa4eba=![];const _0x4586aa=()=>{const _0x5c3300=_0x4e9e4c;!quizSection[_0x5c3300(0x206)][_0x5c3300(0x2d5)](_0x58402b[_0x5c3300(0x1bb)])&&(_0xa4eba=!![]);if(!_0xa4eba)return;const _0x256353=_0x58402b[_0x5c3300(0x2da)](_0x58402b[_0x5c3300(0x379)](window[_0x5c3300(0x25d)],window[_0x5c3300(0x238)]),_0x510f62),_0x5ac59f=_0x58402b[_0x5c3300(0x1e1)](window['outerHeight']-window[_0x5c3300(0x299)],_0x510f62);if(_0x58402b['NdRlR'](_0x256353,_0x5ac59f)&&!_0x3be78a){if(_0x58402b[_0x5c3300(0x339)]===_0x58402b[_0x5c3300(0x26f)]){if(_0x244208)_0x75b9e8[_0x5c3300(0x264)](_0x3ac882);else _0x58402b['ZtkVU'](_0x4bed93['trim'](),'')&&(_0x58402b['hkVWu'](_0x16f458[_0x5c3300(0x306)],'')&&(_0x20281d[_0x5c3300(0x306)]+='\x0a'),_0x4a3f4e['description']+=_0x36fa11);}else _0x3be78a=!![],logEvent('DevTools\x20detected\x20-\x20test\x20terminated'),alert(_0x58402b['LZHWo']),_0x58402b['dHvEy'](forceSubmitTest);}};_0x58402b[_0x4e9e4c(0x2f2)](setInterval,_0x4586aa,0x3e8);}function enterFullscreen(){const _0x5a36c7=a0_0x1c5f94,_0x1191a9={'NlkQC':function(_0x53a6a2){return _0x53a6a2();},'PSxRb':function(_0x5a5f91,_0x1d4270){return _0x5a5f91(_0x1d4270);},'RQdAr':function(_0x1a2dc7,_0x15a838){return _0x1a2dc7/_0x15a838;},'szNsl':function(_0x182355,_0xdf5e74){return _0x182355-_0xdf5e74;},'NyxZo':function(_0x3423e2,_0x457ca0){return _0x3423e2!==_0x457ca0;},'ZEwLM':'miBhK','shciS':function(_0x38e330,_0x1d7fd8){return _0x38e330===_0x1d7fd8;},'XMjKs':_0x5a36c7(0x1b8),'HKHKl':function(_0x2abfef,_0x1dbcaa){return _0x2abfef===_0x1dbcaa;},'fUigi':'uWIBH'},_0x1a802a=document['documentElement'];if(_0x1a802a[_0x5a36c7(0x2a7)])_0x1a802a['requestFullscreen']();else{if(_0x1a802a[_0x5a36c7(0x218)])_0x1191a9[_0x5a36c7(0x1e9)](_0x1191a9['ZEwLM'],_0x1191a9['ZEwLM'])?(_0x14fd6f(),_0x1191a9[_0x5a36c7(0x360)](_0x296480),_0x21880f=_0x572fce[_0x4b3016]['allocatedTime'],_0x1191a9[_0x5a36c7(0x205)](_0xf458ff,_0x2adb88)):_0x1a802a['webkitRequestFullscreen']();else{if(_0x1a802a[_0x5a36c7(0x1d7)])_0x1191a9[_0x5a36c7(0x312)](_0x1191a9[_0x5a36c7(0x363)],_0x1191a9[_0x5a36c7(0x363)])?_0x1a802a[_0x5a36c7(0x1d7)]():(_0x577827[_0x5a36c7(0x314)]=_0x144b07[_0x5a36c7(0x24d)]('\x0a'),_0x262485[_0x5a36c7(0x264)](_0x5bddeb));else{if(_0x1a802a['msRequestFullscreen']){if(_0x1191a9['HKHKl'](_0x1191a9[_0x5a36c7(0x18d)],_0x1191a9['fUigi']))_0x1a802a[_0x5a36c7(0x2a0)]();else{const _0x247216=_0x36509d[_0x3d9936];if(_0x247216[_0x5a36c7(0x19e)]&&!_0x247216[_0x5a36c7(0x182)]){const _0x4ed363=new _0x2a3327();_0x247216[_0x5a36c7(0x1d4)]+=_0x11380a[_0x5a36c7(0x2b9)](_0x1191a9['RQdAr'](_0x1191a9[_0x5a36c7(0x247)](_0x4ed363,_0x247216[_0x5a36c7(0x19e)]),0x3e8)),_0x247216[_0x5a36c7(0x19e)]=_0x4ed363;}}}}}}}function exitFullscreen(){const _0x547bda=a0_0x1c5f94,_0x131ff7={'cELRR':'hidden','jyhzj':function(_0xa23620,_0x833236){return _0xa23620>_0x833236;},'iRrJW':function(_0x5267b7,_0x3dc4b1){return _0x5267b7-_0x3dc4b1;},'kHOKe':function(_0x522465,_0x54703d){return _0x522465>_0x54703d;},'ILIuy':_0x547bda(0x273),'Gjgvc':function(_0x18ba22,_0x5c2bb4){return _0x18ba22(_0x5c2bb4);},'XeZqX':function(_0x1bbd56){return _0x1bbd56();},'AtGrr':function(_0x35e1e6,_0x568c30,_0x27e454){return _0x35e1e6(_0x568c30,_0x27e454);},'HkeGU':function(_0x3d70ac,_0x33ebab){return _0x3d70ac>_0x33ebab;},'VOrsv':function(_0x12dd63,_0x220e03){return _0x12dd63||_0x220e03;},'XsRfm':function(_0x21b819,_0x167e6d){return _0x21b819(_0x167e6d);},'QMzKs':function(_0x1bec2d,_0x10bcbb){return _0x1bec2d===_0x10bcbb;},'RlBft':_0x547bda(0x230),'kQpmh':function(_0x2c3cf7,_0x5bce72){return _0x2c3cf7!==_0x5bce72;},'xeNWP':_0x547bda(0x34a)};try{if(_0x131ff7['QMzKs'](_0x131ff7[_0x547bda(0x30a)],_0x131ff7[_0x547bda(0x30a)])){if(document[_0x547bda(0x190)]||document[_0x547bda(0x1f4)]||document[_0x547bda(0x245)]||document[_0x547bda(0x166)]){if(_0x131ff7[_0x547bda(0x228)](_0x131ff7[_0x547bda(0x366)],_0x131ff7[_0x547bda(0x366)])){const _0xc0e8e5=0xa0;let _0x2c6a4d=![],_0x1f3b87=![];const _0x422b0d=()=>{const _0x9c560e=_0x547bda;!_0x27d920['classList'][_0x9c560e(0x2d5)](_0x131ff7[_0x9c560e(0x274)])&&(_0x1f3b87=!![]);if(!_0x1f3b87)return;const _0x479a0e=_0x131ff7[_0x9c560e(0x294)](_0x131ff7['iRrJW'](_0x355939['outerWidth'],_0x5ab977[_0x9c560e(0x238)]),_0xc0e8e5),_0x2a71ac=_0x131ff7['kHOKe'](_0x131ff7[_0x9c560e(0x34b)](_0x3e4e06[_0x9c560e(0x269)],_0x3e3c52[_0x9c560e(0x299)]),_0xc0e8e5);(_0x479a0e||_0x2a71ac)&&!_0x2c6a4d&&(_0x2c6a4d=!![],_0xa43655(_0x131ff7[_0x9c560e(0x17c)]),_0x131ff7[_0x9c560e(0x1e8)](_0x12767e,'Developer\x20Tools\x20észlelve!\x20A\x20teszt\x20véget\x20ért.'),_0x131ff7['XeZqX'](_0x29f24d));};_0x131ff7['AtGrr'](_0x1a7f83,_0x422b0d,0x3e8);}else{if(document['exitFullscreen'])document[_0x547bda(0x1ad)]()[_0x547bda(0x281)](()=>{});else{if(document[_0x547bda(0x19d)])document[_0x547bda(0x19d)]();else{if(document[_0x547bda(0x246)])document[_0x547bda(0x246)]();else document[_0x547bda(0x26c)]&&document[_0x547bda(0x26c)]();}}}}}else{!_0x3e526c['classList']['contains'](_0x131ff7[_0x547bda(0x274)])&&(_0x22eca6=!![]);if(!_0x13f843)return;const _0x4c353e=_0x131ff7[_0x547bda(0x1c7)](_0x131ff7[_0x547bda(0x34b)](_0x4a3ea9[_0x547bda(0x25d)],_0x61b0b2[_0x547bda(0x238)]),_0x18aed6),_0x5c9f28=_0x131ff7[_0x547bda(0x294)](_0x131ff7['iRrJW'](_0x20f555['outerHeight'],_0x3523b3[_0x547bda(0x299)]),_0x5214e7);_0x131ff7[_0x547bda(0x1e7)](_0x4c353e,_0x5c9f28)&&!_0x53d11a&&(_0xbf2830=!![],_0x50cbb7(_0x131ff7[_0x547bda(0x17c)]),_0x131ff7[_0x547bda(0x2df)](_0x8c570,'Developer\x20Tools\x20észlelve!\x20A\x20teszt\x20véget\x20ért.'),_0x3b42b4());}}catch(_0x186f6f){}}function handleFullscreenChange(){const _0x3eac5c=a0_0x1c5f94,_0x1fec55={'uwrHL':function(_0x2f5bc2,_0x5ac382){return _0x2f5bc2(_0x5ac382);},'lWJkv':'Kileptél\x20a\x20fullscreen\x20módból!\x20A\x20teszt\x20véget\x20ért.','BypAF':'warning','VwNrS':function(_0x4c261c,_0x5c7e9f){return _0x4c261c!==_0x5c7e9f;},'olLwf':_0x3eac5c(0x17f),'WvghX':_0x3eac5c(0x215),'GXeaK':_0x3eac5c(0x356),'JKEgN':function(_0x8f1ad1,_0x3ff16b,_0x2c0bab){return _0x8f1ad1(_0x3ff16b,_0x2c0bab);}},_0x16a08d=!!(document[_0x3eac5c(0x190)]||document[_0x3eac5c(0x1f4)]||document[_0x3eac5c(0x245)]||document[_0x3eac5c(0x166)]);!_0x16a08d&&!quizSection[_0x3eac5c(0x206)]['contains']('hidden')&&testStartTime&&(_0x1fec55[_0x3eac5c(0x331)]('yBKKg',_0x1fec55[_0x3eac5c(0x172)])?(_0x1fec55[_0x3eac5c(0x2f5)](logEvent,_0x1fec55[_0x3eac5c(0x165)]),fullscreenPrompt[_0x3eac5c(0x2cd)]['display']=_0x1fec55[_0x3eac5c(0x229)],_0x1fec55[_0x3eac5c(0x251)](setTimeout,()=>{const _0x4b61ed=_0x3eac5c;_0x1fec55[_0x4b61ed(0x2f5)](alert,_0x1fec55[_0x4b61ed(0x320)]),forceSubmitTest();},0x1f4)):_0xd7f320['classList']['remove'](_0x1fec55[_0x3eac5c(0x272)]));}let visibilityTimeout=null;function handleVisibilityChange(){const _0x40a922=a0_0x1c5f94,_0x5ee8fc={'vBWyz':_0x40a922(0x273),'HeBlY':function(_0x199f85,_0x305d55){return _0x199f85(_0x305d55);},'rMnXg':function(_0x4a9d47){return _0x4a9d47();},'UcGSN':_0x40a922(0x216),'UCffS':_0x40a922(0x18a),'nHzKC':_0x40a922(0x322),'pnRIA':_0x40a922(0x35e),'AVcJC':function(_0x276431,_0x198377){return _0x276431(_0x198377);},'tGfPf':_0x40a922(0x192),'GxpNo':function(_0x16ec59){return _0x16ec59();},'wRCtt':function(_0x3cdfa5,_0x201791){return _0x3cdfa5===_0x201791;},'oSRUc':_0x40a922(0x367),'REPkV':function(_0x127761,_0x19a109){return _0x127761(_0x19a109);},'YopJP':function(_0x592ab2,_0x381fdd){return _0x592ab2===_0x381fdd;},'gZcue':function(_0x5170ef,_0x12774a){return _0x5170ef!==_0x12774a;},'wPpMo':'ifRHX','OxpcT':_0x40a922(0x2c3),'pFAVb':function(_0x4bf319,_0x633cf4,_0x538bcc){return _0x4bf319(_0x633cf4,_0x538bcc);},'rvBtY':_0x40a922(0x311),'NtinF':function(_0x2b5085,_0x3eb86){return _0x2b5085===_0x3eb86;},'jiAxA':'BnmhT'};_0x5ee8fc[_0x40a922(0x280)](quizSection[_0x40a922(0x206)]['contains'](_0x5ee8fc[_0x40a922(0x295)]),![])&&testStartTime&&(_0x5ee8fc[_0x40a922(0x160)](document[_0x40a922(0x2ba)],_0x5ee8fc[_0x40a922(0x295)])?_0x5ee8fc[_0x40a922(0x25e)](_0x5ee8fc[_0x40a922(0x285)],_0x5ee8fc['OxpcT'])?visibilityTimeout=_0x5ee8fc[_0x40a922(0x2cb)](setTimeout,()=>{const _0x1fc03c=_0x40a922;document['visibilityState']===_0x5ee8fc[_0x1fc03c(0x295)]&&(_0x5ee8fc['UCffS']!==_0x5ee8fc[_0x1fc03c(0x338)]?(logEvent(_0x5ee8fc[_0x1fc03c(0x33a)]),_0x5ee8fc[_0x1fc03c(0x1e5)](alert,_0x5ee8fc[_0x1fc03c(0x1dd)]),_0x5ee8fc[_0x1fc03c(0x350)](forceSubmitTest)):(_0x5c606d=!![],_0x48b14c(_0x5ee8fc[_0x1fc03c(0x1a4)]),_0x5ee8fc['HeBlY'](_0x285e49,_0x1fc03c(0x1a7)),_0x5ee8fc[_0x1fc03c(0x22d)](_0x3cd034)));},0x7d0):_0x5ee8fc[_0x40a922(0x280)](_0x8aadbb[_0x40a922(0x37f)],_0x40a922(0x267))&&_0x5ee8fc[_0x40a922(0x22d)](_0x53c661):_0x5ee8fc[_0x40a922(0x2ca)]===_0x5ee8fc[_0x40a922(0x2ca)]?visibilityTimeout&&(_0x5ee8fc[_0x40a922(0x265)](_0x5ee8fc['jiAxA'],_0x40a922(0x2db))?(_0x5ee8fc[_0x40a922(0x378)](clearTimeout,visibilityTimeout),visibilityTimeout=null):_0x39e6e4+=0x1e):(_0x487d9a[_0x40a922(0x2cd)][_0x40a922(0x317)]=_0x5ee8fc[_0x40a922(0x212)],_0x5ee8fc['REPkV'](_0x2a26fe,'Submit\x20modal\x20cancelled')));}function logEvent(_0x164e3d,_0x3152d6={}){const _0x21b58c=a0_0x1c5f94,_0x93661e={'timestamp':new Date()[_0x21b58c(0x358)](),'type':_0x164e3d,'data':_0x3152d6};eventLog[_0x21b58c(0x264)](_0x93661e);}let pyodide=null,pyodideReady=![];async function initPyodide(){const _0x34f492=a0_0x1c5f94,_0x34213b={'vhhxy':function(_0x21044f,_0x19abca){return _0x21044f!==_0x19abca;},'xAyJG':_0x34f492(0x15b),'jKnGh':function(_0x28b993,_0x184127,_0x49b36a){return _0x28b993(_0x184127,_0x49b36a);},'LVpab':_0x34f492(0x28d)};if(pyodideReady)return;try{pyodide=await loadPyodide(),pyodideReady=!![],logEvent(_0x34f492(0x2f4));}catch(_0x4fd8ca){if(_0x34213b[_0x34f492(0x200)](_0x34213b['xAyJG'],_0x34213b['xAyJG'])){const _0x5b8651={'timestamp':new _0x21ab0d()[_0x34f492(0x358)](),'type':_0x29d29b,'data':_0x1c7c94};_0x1b03b5[_0x34f492(0x264)](_0x5b8651);}else{const _0x49d830={};_0x49d830[_0x34f492(0x18e)]=_0x4fd8ca[_0x34f492(0x177)],_0x34213b[_0x34f492(0x2b5)](logEvent,_0x34213b[_0x34f492(0x27f)],_0x49d830);}}}window['addEventListener'](a0_0x1c5f94(0x170),()=>{initPyodide();});function customPythonInput(_0x459abb){const _0x3ceb71=a0_0x1c5f94,_0x5aa253={'TVNwQ':function(_0x38a356,_0x5e22f1){return _0x38a356(_0x5e22f1);},'GYpgb':_0x3ceb71(0x186),'NvGkX':_0x3ceb71(0x152),'FtJRa':'python-input-modal','WRXAc':_0x3ceb71(0x1f0),'dTFLZ':_0x3ceb71(0x301),'KPsxG':_0x3ceb71(0x1c4),'alXaj':function(_0x323a74,_0x2047d0){return _0x323a74||_0x2047d0;}};return new Promise(_0x4f9338=>{const _0x3fec37=_0x3ceb71,_0x2c43ed={'gAXLL':function(_0x2a2bd9,_0x5bf3f9){return _0x2a2bd9===_0x5bf3f9;},'vNEud':'Enter','bnPrS':function(_0x443a78){return _0x443a78();}},_0x3e6fea=document[_0x3fec37(0x21b)](_0x5aa253[_0x3fec37(0x347)]),_0x514da6=document['getElementById'](_0x5aa253[_0x3fec37(0x293)]),_0x25ba3b=document[_0x3fec37(0x21b)](_0x5aa253[_0x3fec37(0x219)]),_0x57747d=document[_0x3fec37(0x21b)](_0x5aa253[_0x3fec37(0x328)]);_0x514da6[_0x3fec37(0x2c8)]=_0x5aa253['alXaj'](_0x459abb,_0x3fec37(0x2a2)),_0x25ba3b[_0x3fec37(0x337)]='',_0x3e6fea[_0x3fec37(0x2cd)]['display']=_0x3fec37(0x356),_0x25ba3b[_0x3fec37(0x244)]();const _0x21ae9c=()=>{const _0xb2578=_0x3fec37,_0x3876d6=_0x25ba3b['value'];_0x3e6fea[_0xb2578(0x2cd)][_0xb2578(0x317)]=_0xb2578(0x367),_0x5aa253[_0xb2578(0x235)](_0x4f9338,_0x3876d6),_0x57747d['removeEventListener'](_0x5aa253['GYpgb'],_0x21ae9c),_0x25ba3b['removeEventListener'](_0x5aa253['NvGkX'],_0x4a3c80);},_0x4a3c80=_0x10ce7a=>{const _0x348f6a=_0x3fec37;_0x2c43ed[_0x348f6a(0x32a)](_0x10ce7a[_0x348f6a(0x37f)],_0x2c43ed[_0x348f6a(0x1f3)])&&_0x2c43ed[_0x348f6a(0x188)](_0x21ae9c);};_0x57747d['addEventListener'](_0x3fec37(0x186),_0x21ae9c),_0x25ba3b[_0x3fec37(0x298)](_0x5aa253[_0x3fec37(0x18c)],_0x4a3c80);});}async function runPythonCode(){const _0x13b134=a0_0x1c5f94,_0x100b0b={'nGXDi':function(_0x5ebb1d,_0x422ca9){return _0x5ebb1d(_0x422ca9);},'bSDLb':'Kérlek,\x20töltsd\x20ki\x20az\x20összes\x20mezőt!','qxqwG':function(_0x3e2467,_0x3f0a0c){return _0x3e2467===_0x3f0a0c;},'BXwrI':'GEjIe','BAmLI':'yePxn','BpkDF':function(_0x32a11d,_0x3342f4){return _0x32a11d(_0x3342f4);},'etMmb':_0x13b134(0x323),'WBceq':function(_0x554e52){return _0x554e52();},'krcpO':_0x13b134(0x318),'JyVUb':function(_0x392337,_0x30d076){return _0x392337(_0x30d076);},'EAhHP':_0x13b134(0x277),'mOemm':_0x13b134(0x1c9),'HPapB':_0x13b134(0x1af),'JiXHq':_0x13b134(0x27c),'DCCyB':_0x13b134(0x18e),'LwyaC':'Futtatás...\x0a','QTplM':function(_0x16d7e2,_0xc17087){return _0x16d7e2!==_0xc17087;},'fLwqe':_0x13b134(0x32f),'zeEze':'Python\x20környezet\x20betöltése...\x0a','kvzeV':function(_0x5b09ba){return _0x5b09ba();},'GKiXK':_0x13b134(0x154),'TYrwp':_0x13b134(0x374),'vGaUK':_0x13b134(0x243),'KHgXS':_0x13b134(0x35f),'AtoFQ':function(_0x18aaa6,_0x588ee6){return _0x18aaa6+_0x588ee6;},'RtPJp':_0x13b134(0x17a),'Gnbnb':function(_0x35efb1,_0x322446,_0x3ac858){return _0x35efb1(_0x322446,_0x3ac858);},'akfSR':_0x13b134(0x34e)},_0x45f52a=codeEditor[_0x13b134(0x22f)](),_0x203e2d=document[_0x13b134(0x21b)](_0x100b0b[_0x13b134(0x2f7)]),_0x4254ad=document['getElementById'](_0x100b0b[_0x13b134(0x362)]);if(!_0x45f52a[_0x13b134(0x22c)]()){_0x4254ad[_0x13b134(0x2cd)][_0x13b134(0x317)]=_0x100b0b['JiXHq'],_0x203e2d['classList'][_0x13b134(0x208)](_0x100b0b[_0x13b134(0x2c1)]),_0x203e2d[_0x13b134(0x2c8)]=_0x13b134(0x1be);return;}_0x4254ad[_0x13b134(0x2cd)][_0x13b134(0x317)]=_0x100b0b[_0x13b134(0x2f1)],_0x203e2d['textContent']=_0x100b0b[_0x13b134(0x2b1)],_0x203e2d['classList']['remove'](_0x13b134(0x18e));if(!pyodideReady){if(_0x100b0b['QTplM'](_0x100b0b['fLwqe'],_0x100b0b[_0x13b134(0x289)])){_0x100b0b[_0x13b134(0x286)](_0x1b49b2,_0x100b0b['bSDLb']);return;}else{_0x203e2d[_0x13b134(0x2c8)]=_0x100b0b[_0x13b134(0x1c0)],await _0x100b0b[_0x13b134(0x1a8)](initPyodide);if(!pyodideReady){_0x203e2d['classList']['add'](_0x100b0b[_0x13b134(0x2c1)]),_0x203e2d[_0x13b134(0x2c8)]=_0x100b0b[_0x13b134(0x159)];return;}}}_0x203e2d['textContent']='';try{let _0x25a560=[];await pyodide['runPythonAsync']('\x0aimport\x20sys\x0aimport\x20builtins\x0aimport\x20js\x0afrom\x20io\x20import\x20StringIO\x0a\x0a#\x20Create\x20output\x20buffer\x0a_output_buffer\x20=\x20[]\x0a\x0a#\x20Custom\x20print\x20function\x0adef\x20_custom_print(*args,\x20sep=\x27\x20\x27,\x20end=\x27\x5cn\x27,\x20**kwargs):\x0a\x20\x20\x20\x20text\x20=\x20sep.join(str(arg)\x20for\x20arg\x20in\x20args)\x20+\x20end\x0a\x20\x20\x20\x20_output_buffer.append(text)\x0a\x0a#\x20Custom\x20input\x20function\x0adef\x20_custom_input(prompt=\x27\x27):\x0a\x20\x20\x20\x20_output_buffer.append(prompt)\x0a\x20\x20\x20\x20return\x20\x27\x27\x20\x20#\x20Placeholder,\x20will\x20be\x20replaced\x0a\x0a#\x20Save\x20original\x20functions\x0a_original_print\x20=\x20builtins.print\x0a_original_input\x20=\x20builtins.input\x0a\x0a#\x20Override\x20builtins\x0abuiltins.print\x20=\x20_custom_print\x0a');const _0x29bff=async _0x15d2f8=>{const _0x1ffa5f=_0x13b134;if(_0x100b0b[_0x1ffa5f(0x354)](_0x100b0b[_0x1ffa5f(0x275)],_0x100b0b[_0x1ffa5f(0x2c7)]))_0x30b38c[_0x1ffa5f(0x2a7)]();else{_0x25a560[_0x1ffa5f(0x264)](_0x15d2f8),_0x203e2d[_0x1ffa5f(0x2c8)]=_0x25a560[_0x1ffa5f(0x24d)]('');const _0x3493b4=await _0x100b0b[_0x1ffa5f(0x34d)](customPythonInput,_0x15d2f8);return _0x3493b4;}};pyodide['globals']['set'](_0x13b134(0x1ba),_0x29bff),await pyodide['runPythonAsync']('\x0aimport\x20asyncio\x0afrom\x20js\x20import\x20Object\x0a\x0a#\x20Get\x20the\x20main\x20event\x20loop\x0a_main_loop\x20=\x20asyncio.get_event_loop()\x0a\x0aasync\x20def\x20_async_input(prompt=\x27\x27):\x0a\x20\x20\x20\x20result\x20=\x20await\x20_js_input_func(prompt)\x0a\x20\x20\x20\x20return\x20result\x0a\x0adef\x20_custom_input_wrapper(prompt=\x27\x27):\x0a\x20\x20\x20\x20#\x20Use\x20asyncio.ensure_future\x20and\x20run_until_complete\x20with\x20the\x20existing\x20loop\x0a\x20\x20\x20\x20future\x20=\x20asyncio.ensure_future(_async_input(prompt),\x20loop=_main_loop)\x0a\x20\x20\x20\x20#\x20Run\x20the\x20event\x20loop\x20until\x20the\x20future\x20is\x20done\x0a\x20\x20\x20\x20while\x20not\x20future.done():\x0a\x20\x20\x20\x20\x20\x20\x20\x20_main_loop._run_once()\x0a\x20\x20\x20\x20return\x20future.result()\x0a\x0abuiltins.input\x20=\x20_custom_input_wrapper\x0a');const _0x30f72e=_0x13b134(0x191)+_0x45f52a[_0x13b134(0x168)]('\x0a')['map'](_0x202b6f=>'\x20\x20\x20\x20'+_0x202b6f)[_0x13b134(0x24d)]('\x0a')+_0x13b134(0x1f7),_0x504e0d=await pyodide[_0x13b134(0x1ee)](_0x30f72e);if(_0x504e0d&&_0x504e0d[_0x13b134(0x22c)]()){if(_0x100b0b[_0x13b134(0x220)](_0x13b134(0x187),_0x13b134(0x302)))_0x203e2d[_0x13b134(0x2c8)]=_0x504e0d;else{const _0x3ec770=_0x100b0b[_0x13b134(0x16b)][_0x13b134(0x168)]('|');let _0xd72372=0x0;while(!![]){switch(_0x3ec770[_0xd72372++]){case'0':_0xb446ab();continue;case'1':_0x100b0b[_0x13b134(0x198)](_0x20e04a);continue;case'2':_0x100b0b['WBceq'](_0xf460d);continue;case'3':_0x561d36();continue;case'4':_0x100b0b['BpkDF'](_0x376fa4,_0x100b0b[_0x13b134(0x24a)]);continue;case'5':_0x140989=new _0x360f27();continue;case'6':_0x100b0b['WBceq'](_0x1b185f);continue;}break;}}}else{if(_0x13b134(0x374)===_0x100b0b[_0x13b134(0x31f)])_0x203e2d[_0x13b134(0x2c8)]=_0x100b0b['vGaUK'];else{_0x100b0b[_0x13b134(0x18f)](_0x59b096,_0x100b0b[_0x13b134(0x329)]+_0x29a1d1['length']);return;}}_0x100b0b[_0x13b134(0x286)](logEvent,_0x100b0b[_0x13b134(0x283)]),await pyodide[_0x13b134(0x1ee)](_0x13b134(0x209));}catch(_0x5cc938){_0x203e2d['classList'][_0x13b134(0x380)](_0x100b0b[_0x13b134(0x2c1)]),_0x203e2d[_0x13b134(0x2c8)]=_0x100b0b[_0x13b134(0x377)](_0x100b0b['RtPJp'],_0x5cc938['toString']()),_0x100b0b['Gnbnb'](logEvent,_0x100b0b[_0x13b134(0x346)],{'error':_0x5cc938['toString']()});try{await pyodide[_0x13b134(0x1ee)](_0x13b134(0x209));}catch(_0x1cd2ac){}}}
// Override input handling to support PyProxy conversion and modal input.
async function runPythonCode() {
    const code = codeEditor.getValue();
    const outputBox = document.getElementById("output-box");
    const outputContainer = document.getElementById("output-container");

    if (!code.trim()) {
        outputContainer.style.display = "block";
        outputBox.classList.remove("error");
        outputBox.textContent = "Nincs futtatható kód!\nÍrj be Python kódot, majd nyomd meg a Futtatás gombot.";
        return;
    }

    outputContainer.style.display = "block";
    outputBox.textContent = "Futtatás...\n";
    outputBox.classList.remove("error");

    if (!pyodideReady) {
        outputBox.textContent = "Python környezet betöltése...\n";
        await initPyodide();
        if (!pyodideReady) {
            outputBox.classList.add("error");
            outputBox.textContent = "Hiba: A Python környezet nem tölthető be!";
            return;
        }
    }

    outputBox.textContent = "";

    try {
        let outputBuffer = [];

        await pyodide.runPythonAsync(`
import sys
import builtins
import js
from io import StringIO

_output_buffer = []

def _custom_print(*args, sep=' ', end='\\n', **kwargs):
    text = sep.join(str(arg) for arg in args) + end
    _output_buffer.append(text)

def _custom_input(prompt=''):
    _output_buffer.append(prompt)
    return ''

_original_print = builtins.print
_original_input = builtins.input

builtins.print = _custom_print
`);

        const inputFunc = async (prompt) => {
            outputBuffer.push(prompt);
            outputBox.textContent = outputBuffer.join("");
            const result = await customPythonInput(prompt);
            return result;
        };

        window._pythonInputFunc = inputFunc;

        await pyodide.runPythonAsync(`
from js import _pythonInputFunc

def _sync_input_wrapper(prompt=''):
    import json
    _output_buffer.append(json.dumps({'__input_request__': prompt}))
    return ''

builtins.input = _sync_input_wrapper
`);

        const userCodeWrapped = `
try:
${code.split("\\n").map(line => "    " + line).join("\\n")}
except Exception as e:
    import traceback
    _custom_print(traceback.format_exc())

import json
result = []
for item in _output_buffer:
    try:
        parsed = json.loads(item)
        if isinstance(parsed, dict) and '__input_request__' in parsed:
            result.append(parsed)
        else:
            result.append(item)
    except:
        result.append(item)
result
`;

        let result = await pyodide.runPythonAsync(userCodeWrapped);
        if (result && typeof result.toJs === "function") {
            const converted = result.toJs({ dict_converter: Object.fromEntries });
            if (typeof result.destroy === "function") {
                result.destroy();
            }
            result = converted;
        }

        let needsRerun = false;
        const inputValues = [];

        if (Array.isArray(result)) {
            for (const item of result) {
                if (typeof item === "object" && item.__input_request__) {
                    needsRerun = true;
                    const inputValue = await inputFunc(item.__input_request__);
                    inputValues.push(inputValue);
                }
            }
        }

        if (needsRerun) {
            const inputValuesJson = JSON.stringify(inputValues);
            const userCodeWithInputs = `
_input_values = ${inputValuesJson}
_input_index = [0]

def _real_input_wrapper(prompt=''):
    _output_buffer.append(prompt)
    if _input_index[0] < len(_input_values):
        value = _input_values[_input_index[0]]
        _input_index[0] += 1
        _output_buffer.append(str(value) + '\\n')
        return value
    return ''

builtins.input = _real_input_wrapper

_output_buffer.clear()

try:
${code.split("\\n").map(line => "    " + line).join("\\n")}
except Exception as e:
    import traceback
    _custom_print(traceback.format_exc())

''.join(_output_buffer)
`;

            result = await pyodide.runPythonAsync(userCodeWithInputs);
            if (result && typeof result.toJs === "function") {
                const converted = result.toJs({ dict_converter: Object.fromEntries });
                if (typeof result.destroy === "function") {
                    result.destroy();
                }
                result = converted;
            }
        } else {
            result = Array.isArray(result) ? result.join("") : result;
        }

        if (result && result.trim()) {
            outputBox.textContent = result;
        } else {
            outputBox.textContent = "(Nincs kimenet)";
        }

        logEvent("Python code executed successfully");

        await pyodide.runPythonAsync(`
builtins.print = _original_print
builtins.input = _original_input
`);
    } catch (err) {
        outputBox.classList.add("error");
        outputBox.textContent = "Hiba:\n" + err.toString();
        logEvent("Python code execution failed", { error: err.toString() });

        try {
            await pyodide.runPythonAsync(`
builtins.print = _original_print
builtins.input = _original_input
`);
        } catch (e) {
            // Ignore cleanup errors
        }
    }
}

// Override input handling to avoid indentation issues in wrapped code.
async function runPythonCode() {
    const code = codeEditor.getValue();
    const outputBox = document.getElementById("output-box");
    const outputContainer = document.getElementById("output-container");

    if (!code.trim()) {
        outputContainer.style.display = "block";
        outputBox.classList.remove("error");
        outputBox.textContent = "Nincs futtatható kód!\nÍrj be Python kódot, majd nyomd meg a Futtatás gombot.";
        return;
    }

    outputContainer.style.display = "block";
    outputBox.textContent = "Futtatás...\n";
    outputBox.classList.remove("error");

    if (!pyodideReady) {
        outputBox.textContent = "Python környezet betöltése...\n";
        await initPyodide();
        if (!pyodideReady) {
            outputBox.classList.add("error");
            outputBox.textContent = "Hiba: A Python környezet nem tölthető be!";
            return;
        }
    }

    outputBox.textContent = "";

    try {
        let outputBuffer = [];

        await pyodide.runPythonAsync(`
import sys
import builtins
import js
from io import StringIO

_output_buffer = []

def _custom_print(*args, sep=' ', end='\\n', **kwargs):
    text = sep.join(str(arg) for arg in args) + end
    _output_buffer.append(text)

def _custom_input(prompt=''):
    _output_buffer.append(prompt)
    return ''

_original_print = builtins.print
_original_input = builtins.input

builtins.print = _custom_print
`);

        const inputFunc = async (prompt) => {
            outputBuffer.push(prompt);
            outputBox.textContent = outputBuffer.join("");
            const result = await customPythonInput(prompt);
            return result;
        };

        window._pythonInputFunc = inputFunc;

        await pyodide.runPythonAsync(`
from js import _pythonInputFunc

def _sync_input_wrapper(prompt=''):
    import json
    _output_buffer.append(json.dumps({'__input_request__': prompt}))
    return ''

builtins.input = _sync_input_wrapper
`);

        pyodide.globals.set("_user_code", code);
        const userCodeWrapped = `
try:
    exec(_user_code, globals())
except Exception as e:
    import traceback
    _custom_print(traceback.format_exc())

import json
result = []
for item in _output_buffer:
    try:
        parsed = json.loads(item)
        if isinstance(parsed, dict) and '__input_request__' in parsed:
            result.append(parsed)
        else:
            result.append(item)
    except:
        result.append(item)
result
`;

        let result = await pyodide.runPythonAsync(userCodeWrapped);
        if (result && typeof result.toJs === "function") {
            const converted = result.toJs({ dict_converter: Object.fromEntries });
            if (typeof result.destroy === "function") {
                result.destroy();
            }
            result = converted;
        }

        let needsRerun = false;
        const inputValues = [];

        if (Array.isArray(result)) {
            for (const item of result) {
                if (typeof item === "object" && item.__input_request__) {
                    needsRerun = true;
                    const inputValue = await inputFunc(item.__input_request__);
                    inputValues.push(inputValue);
                }
            }
        }

        if (needsRerun) {
            const inputValuesJson = JSON.stringify(inputValues);
            const userCodeWithInputs = `
_input_values = ${inputValuesJson}
_input_index = [0]

def _real_input_wrapper(prompt=''):
    _output_buffer.append(prompt)
    if _input_index[0] < len(_input_values):
        value = _input_values[_input_index[0]]
        _input_index[0] += 1
        return value
    return ''

builtins.input = _real_input_wrapper

_output_buffer.clear()

try:
    exec(_user_code, globals())
except Exception as e:
    import traceback
    _custom_print(traceback.format_exc())

''.join(_output_buffer)
`;

            result = await pyodide.runPythonAsync(userCodeWithInputs);
            if (result && typeof result.toJs === "function") {
                const converted = result.toJs({ dict_converter: Object.fromEntries });
                if (typeof result.destroy === "function") {
                    result.destroy();
                }
                result = converted;
            }
        } else {
            result = Array.isArray(result) ? result.join("") : result;
        }

        if (result && result.trim()) {
            outputBox.textContent = result;
        } else {
            outputBox.textContent = "(Nincs kimenet)";
        }

        logEvent("Python code executed successfully");

        await pyodide.runPythonAsync(`
builtins.print = _original_print
builtins.input = _original_input
`);
    } catch (err) {
        outputBox.classList.add("error");
        outputBox.textContent = "Hiba:\n" + err.toString();
        logEvent("Python code execution failed", { error: err.toString() });

        try {
            await pyodide.runPythonAsync(`
builtins.print = _original_print
builtins.input = _original_input
`);
        } catch (e) {
            // Ignore cleanup errors
        }
    }
}

// Final override to echo input value in output and avoid indentation issues.
async function runPythonCode() {
    const code = codeEditor.getValue();
    const outputBox = document.getElementById("output-box");
    const outputContainer = document.getElementById("output-container");

    if (!code.trim()) {
        outputContainer.style.display = "block";
        outputBox.classList.remove("error");
        outputBox.textContent = "Nincs futtatható kód!\nÍrj be Python kódot, majd nyomd meg a Futtatás gombot.";
        return;
    }

    outputContainer.style.display = "block";
    outputBox.textContent = "Futtatás...\n";
    outputBox.classList.remove("error");

    if (!pyodideReady) {
        outputBox.textContent = "Python környezet betöltése...\n";
        await initPyodide();
        if (!pyodideReady) {
            outputBox.classList.add("error");
            outputBox.textContent = "Hiba: A Python környezet nem tölthető be!";
            return;
        }
    }

    outputBox.textContent = "";

    try {
        let outputBuffer = [];

        await pyodide.runPythonAsync(`
import sys
import builtins
import js
from io import StringIO

_output_buffer = []

def _custom_print(*args, sep=' ', end='\\n', **kwargs):
    text = sep.join(str(arg) for arg in args) + end
    _output_buffer.append(text)

def _custom_input(prompt=''):
    _output_buffer.append(prompt)
    return ''

_original_print = builtins.print
_original_input = builtins.input

builtins.print = _custom_print
`);

        const inputFunc = async (prompt) => {
            outputBuffer.push(prompt);
            outputBox.textContent = outputBuffer.join("");
            const result = await customPythonInput(prompt);
            return result;
        };

        window._pythonInputFunc = inputFunc;

        await pyodide.runPythonAsync(`
from js import _pythonInputFunc

def _sync_input_wrapper(prompt=''):
    import json
    _output_buffer.append(json.dumps({'__input_request__': prompt}))
    return ''

builtins.input = _sync_input_wrapper
`);

        pyodide.globals.set("_user_code", code);
        const userCodeWrapped = `
try:
    exec(_user_code, globals())
except Exception as e:
    import traceback
    _custom_print(traceback.format_exc())

import json
result = []
for item in _output_buffer:
    try:
        parsed = json.loads(item)
        if isinstance(parsed, dict) and '__input_request__' in parsed:
            result.append(parsed)
        else:
            result.append(item)
    except:
        result.append(item)
result
`;

        let result = await pyodide.runPythonAsync(userCodeWrapped);
        if (result && typeof result.toJs === "function") {
            const converted = result.toJs({ dict_converter: Object.fromEntries });
            if (typeof result.destroy === "function") {
                result.destroy();
            }
            result = converted;
        }

        let needsRerun = false;
        const inputValues = [];

        if (Array.isArray(result)) {
            for (const item of result) {
                if (typeof item === "object" && item.__input_request__) {
                    needsRerun = true;
                    const inputValue = await inputFunc(item.__input_request__);
                    inputValues.push(inputValue);
                }
            }
        }

        if (needsRerun) {
            const inputValuesJson = JSON.stringify(inputValues);
            const userCodeWithInputs = `
_input_values = ${inputValuesJson}
_input_index = [0]

def _real_input_wrapper(prompt=''):
    _output_buffer.append(prompt)
    if _input_index[0] < len(_input_values):
        value = _input_values[_input_index[0]]
        _input_index[0] += 1
        _output_buffer.append(str(value) + '\\n')
        return value
    return ''

builtins.input = _real_input_wrapper

_output_buffer.clear()

try:
    exec(_user_code, globals())
except Exception as e:
    import traceback
    _custom_print(traceback.format_exc())

''.join(_output_buffer)
`;

            result = await pyodide.runPythonAsync(userCodeWithInputs);
            if (result && typeof result.toJs === "function") {
                const converted = result.toJs({ dict_converter: Object.fromEntries });
                if (typeof result.destroy === "function") {
                    result.destroy();
                }
                result = converted;
            }
        } else {
            result = Array.isArray(result) ? result.join("") : result;
        }

        if (result && result.trim()) {
            outputBox.textContent = result;
        } else {
            outputBox.textContent = "(Nincs kimenet)";
        }

        logEvent("Python code executed successfully");

        await pyodide.runPythonAsync(`
builtins.print = _original_print
builtins.input = _original_input
`);
    } catch (err) {
        outputBox.classList.add("error");
        outputBox.textContent = "Hiba:\n" + err.toString();
        logEvent("Python code execution failed", { error: err.toString() });

        try {
            await pyodide.runPythonAsync(`
builtins.print = _original_print
builtins.input = _original_input
`);
        } catch (e) {
            // Ignore cleanup errors
        }
    }
}
