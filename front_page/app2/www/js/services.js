angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {

      return 'chatting';
    }
  };
})
//推荐的书
  .factory('recommendBooks',function(){
    var books=
      [{
        bookName: '百年孤独',
        writer:"",
        img:"img/bainian.png",
        intro: "布恩迪亚家族的第二代有两男一女布恩迪亚家族的第二代有两男一女：老大何塞·阿尔卡蒂奥是在来马孔多的路上出生《百年孤独》中描绘的场景《百年孤独》中描绘的场景的，他在路上长大，像他父亲一样固执，但没有他父亲那样的想象力；他和一个叫庇拉尔·特尔内拉的女人私通，有了孩子，但在一次吉普赛人来马孔多表演时又与一名吉普赛女郎相爱，于是他选择了出走；后来他回来了，但是性情琢磨不定。最后不顾家人的反对，与丽贝卡结婚，但被赶出家门，最后在家中被枪杀。老二奥雷里亚诺生于马孔多，在娘肚里就会哭，睁着眼睛出世，从小就赋有预见事物的本领，少年时就像父亲一样沉默寡言，整天埋头在父亲的实验室里做小金鱼。长大后爱上马孔多里正千金年幼的蕾梅黛丝，在此之前，他与哥哥的情人生有一子，名叫奥雷里亚诺·何塞。他美丽的怀有双胞胎的妻子因被阿玛兰妲误杀死去。后来他参加了内战，当上上校。他一生遭遇过14次暗杀，73次埋伏和一次枪决，均幸免于难，当他认识到这场战争是毫无意义的时候，便于政府签订和约，停止战争，然后对准心窝开枪自杀，可他却奇迹般的活了下来。 与17个外地女子姘居，生下17个男孩。这些男孩以后不约而同回马孔多寻根，却被追杀，一星期后，只有老大活下来。奥雷里亚诺年老归家，每日炼金子作小金鱼，每天做两条，达到25条时便放到坩埚里熔化，重新再做。他像父亲一样过着与世隔绝、孤独的日子，一直到死。老三是女儿阿玛兰妲，爱上了意大利钢琴技师皮埃特罗，在情敌丽贝卡放弃意大利人与何塞·阿尔卡蒂奥结婚后与意大利人交往，却又拒绝与意大利人结婚，意大利人为此自杀。由于悔恨，她故意烧伤一只手，终生用黑色绷带缠起来，决心永不嫁人。但她内心感到异常孤独、苦闷，甚至和刚刚成年的侄儿厮混，想用此作为“治疗病的临时药剂”。然而她始终无法摆脱内心的孤独，她把自己终日关在房中缝制衣，缝了拆，拆了缝，直至生命的最后一刻。家族第三代第三代人只有何塞·阿尔卡蒂奥的儿子阿尔卡蒂奥和奥雷里亚诺的儿子奥雷里亚诺·何塞。前者不知生母为谁，竟狂热地爱上自己的生母，几乎酿成大错。但又因生母的引见，爱上了桑塔索菲亚·德拉·彼达，后来成为马孔多的从未有过的暴君，贪赃枉法，最后被保守派军队枪毙。后者过早成熟，热恋着自己的姑母阿玛兰妲，因无法得到满足而陷入孤独之中，于是参军。进入军队之后仍然无法排遣对姑母的恋情，便去找妓女寻求安慰，借以摆脱孤独，最终也死于乱军之中。家族第四代第四代即是阿尔卡蒂奥与人私通生下的一女两男。女儿美人儿蕾梅黛丝楚楚动人，散发着引人不安的气味，这种气味曾将几个男人置于死地。她全身不穿衣服，套着一个布袋，只是不想把时间浪费在穿衣服上。这个独特的姑娘世事洞明，超然于外，最后神奇地抓着一个雪白的床单乘风而去，永远消失在空中。她的两个弟弟阿尔卡蒂奥第二和奥雷里亚诺第二是孪生子。阿尔卡蒂奥第二在美国人开办的香蕉公司里当监工，鼓动工人罢工，成为劳工领袖。后来，他带领三千多工人罢工，遭到军警的镇压，三千多人只他一人幸免。他目击政府用火车把工人们的尸体运往海边丢到大海，又通过电台宣布工人们暂时调到别处工作。阿尔卡蒂奥四处诉说他亲历的这场大屠杀揭露真相，反被认为神智不清。他无比恐惧失望，把自己关在房子里潜心研究吉卜赛人留下的羊皮手稿，一直到死他都呆在这个房间里。奥雷里亚诺第二没有正当的职业，终日纵情酒色，弃妻子费尔南达于不顾，在情妇佩特拉家中厮混。奇怪的是每当他与情妇同居时，他家的牲畜迅速地繁殖，给他带来了财富，一旦回到妻子身边，便家业破败。他与妻子生有二女一男，最后在病痛中与阿尔卡蒂奥同时死去，从生到死，人们一直没有认清他们兄弟俩儿谁是谁。家族第五代布恩迪亚家族的第五代是奥雷里亚诺第二的二女一男，长子何赛·阿尔卡蒂奥儿时便被送往罗马神学院去学习，母亲希望他日后能当主教，但他对此毫无兴趣，只是为了那假想中的遗产，才欺骗母亲说他在神学院学习。母亲死后，他回家靠变卖家业为生。后发现乌尔苏拉藏在地窖里的7000多个金币，从此过着更加放荡的生活，不久便被抢劫金币的歹徒杀死。大女儿雷纳塔·蕾梅黛丝（梅梅）爱上了香蕉公司汽车库的机修工马乌里肖·巴比伦，母亲禁止他们来往，他们只好暗中在浴室相会，母亲发现后禁止女儿外出，并请了保镖守在家里。 马乌里肖·巴比伦爬上梅梅家的屋顶，结果被保镖打中背部，终日卧病在床，被人当成偷鸡贼，孤独中老死。梅梅万念俱灰。她母亲认为家丑不外扬，将怀着身孕的她送往修道院，终生一言未发。小女儿阿玛兰妲·乌尔苏拉早年在布鲁塞尔上学，在那里与飞行员加斯通交往，交往后二人回到马孔多，见到一片凋敝，决心重整家园。她朝气蓬勃，充满活力，仅在三个月就使家园焕然一新。她的到来，使马孔多出现了一个最特别的人，她的情绪比这家族的人都好，她想把一切陈规陋习打入十八层地狱。她决定定居下来，拯救这个灾难深重的村镇。"
      },{
        bookName: '百年孤独',
        writer:"",
        img:"img/bainian.png",
        intro: "布恩迪亚家族的第二代有两男一女布恩迪亚家族的第二代有两男一女：老大何塞·阿尔卡蒂奥是在来马孔多的路上出生《百年孤独》中描绘的场景《百年孤独》中描绘的场景的，他在路上长大，像他父亲一样固执，但没有他父亲那样的想象力；他和一个叫庇拉尔·特尔内拉的女人私通，有了孩子，但在一次吉普赛人来马孔多表演时又与一名吉普赛女郎相爱，于是他选择了出走；后来他回来了，但是性情琢磨不定。最后不顾家人的反对，与丽贝卡结婚，但被赶出家门，最后在家中被枪杀。老二奥雷里亚诺生于马孔多，在娘肚里就会哭，睁着眼睛出世，从小就赋有预见事物的本领，少年时就像父亲一样沉默寡言，整天埋头在父亲的实验室里做小金鱼。长大后爱上马孔多里正千金年幼的蕾梅黛丝，在此之前，他与哥哥的情人生有一子，名叫奥雷里亚诺·何塞。他美丽的怀有双胞胎的妻子因被阿玛兰妲误杀死去。后来他参加了内战，当上上校。他一生遭遇过14次暗杀，73次埋伏和一次枪决，均幸免于难，当他认识到这场战争是毫无意义的时候，便于政府签订和约，停止战争，然后对准心窝开枪自杀，可他却奇迹般的活了下来。 与17个外地女子姘居，生下17个男孩。这些男孩以后不约而同回马孔多寻根，却被追杀，一星期后，只有老大活下来。奥雷里亚诺年老归家，每日炼金子作小金鱼，每天做两条，达到25条时便放到坩埚里熔化，重新再做。他像父亲一样过着与世隔绝、孤独的日子，一直到死。老三是女儿阿玛兰妲，爱上了意大利钢琴技师皮埃特罗，在情敌丽贝卡放弃意大利人与何塞·阿尔卡蒂奥结婚后与意大利人交往，却又拒绝与意大利人结婚，意大利人为此自杀。由于悔恨，她故意烧伤一只手，终生用黑色绷带缠起来，决心永不嫁人。但她内心感到异常孤独、苦闷，甚至和刚刚成年的侄儿厮混，想用此作为“治疗病的临时药剂”。然而她始终无法摆脱内心的孤独，她把自己终日关在房中缝制衣，缝了拆，拆了缝，直至生命的最后一刻。家族第三代第三代人只有何塞·阿尔卡蒂奥的儿子阿尔卡蒂奥和奥雷里亚诺的儿子奥雷里亚诺·何塞。前者不知生母为谁，竟狂热地爱上自己的生母，几乎酿成大错。但又因生母的引见，爱上了桑塔索菲亚·德拉·彼达，后来成为马孔多的从未有过的暴君，贪赃枉法，最后被保守派军队枪毙。后者过早成熟，热恋着自己的姑母阿玛兰妲，因无法得到满足而陷入孤独之中，于是参军。进入军队之后仍然无法排遣对姑母的恋情，便去找妓女寻求安慰，借以摆脱孤独，最终也死于乱军之中。家族第四代第四代即是阿尔卡蒂奥与人私通生下的一女两男。女儿美人儿蕾梅黛丝楚楚动人，散发着引人不安的气味，这种气味曾将几个男人置于死地。她全身不穿衣服，套着一个布袋，只是不想把时间浪费在穿衣服上。这个独特的姑娘世事洞明，超然于外，最后神奇地抓着一个雪白的床单乘风而去，永远消失在空中。她的两个弟弟阿尔卡蒂奥第二和奥雷里亚诺第二是孪生子。阿尔卡蒂奥第二在美国人开办的香蕉公司里当监工，鼓动工人罢工，成为劳工领袖。后来，他带领三千多工人罢工，遭到军警的镇压，三千多人只他一人幸免。他目击政府用火车把工人们的尸体运往海边丢到大海，又通过电台宣布工人们暂时调到别处工作。阿尔卡蒂奥四处诉说他亲历的这场大屠杀揭露真相，反被认为神智不清。他无比恐惧失望，把自己关在房子里潜心研究吉卜赛人留下的羊皮手稿，一直到死他都呆在这个房间里。奥雷里亚诺第二没有正当的职业，终日纵情酒色，弃妻子费尔南达于不顾，在情妇佩特拉家中厮混。奇怪的是每当他与情妇同居时，他家的牲畜迅速地繁殖，给他带来了财富，一旦回到妻子身边，便家业破败。他与妻子生有二女一男，最后在病痛中与阿尔卡蒂奥同时死去，从生到死，人们一直没有认清他们兄弟俩儿谁是谁。家族第五代布恩迪亚家族的第五代是奥雷里亚诺第二的二女一男，长子何赛·阿尔卡蒂奥儿时便被送往罗马神学院去学习，母亲希望他日后能当主教，但他对此毫无兴趣，只是为了那假想中的遗产，才欺骗母亲说他在神学院学习。母亲死后，他回家靠变卖家业为生。后发现乌尔苏拉藏在地窖里的7000多个金币，从此过着更加放荡的生活，不久便被抢劫金币的歹徒杀死。大女儿雷纳塔·蕾梅黛丝（梅梅）爱上了香蕉公司汽车库的机修工马乌里肖·巴比伦，母亲禁止他们来往，他们只好暗中在浴室相会，母亲发现后禁止女儿外出，并请了保镖守在家里。 马乌里肖·巴比伦爬上梅梅家的屋顶，结果被保镖打中背部，终日卧病在床，被人当成偷鸡贼，孤独中老死。梅梅万念俱灰。她母亲认为家丑不外扬，将怀着身孕的她送往修道院，终生一言未发。小女儿阿玛兰妲·乌尔苏拉早年在布鲁塞尔上学，在那里与飞行员加斯通交往，交往后二人回到马孔多，见到一片凋敝，决心重整家园。她朝气蓬勃，充满活力，仅在三个月就使家园焕然一新。她的到来，使马孔多出现了一个最特别的人，她的情绪比这家族的人都好，她想把一切陈规陋习打入十八层地狱。她决定定居下来，拯救这个灾难深重的村镇。"
      },{
        bookName: '百年孤独',
        writer:"",
        img:"img/bainian.png",
        intro: "布恩迪亚家族的第二代有两男一女布恩迪亚家族的第二代有两男一女：老大何塞·阿尔卡蒂奥是在来马孔多的路上出生《百年孤独》中描绘的场景《百年孤独》中描绘的场景的，他在路上长大，像他父亲一样固执，但没有他父亲那样的想象力；他和一个叫庇拉尔·特尔内拉的女人私通，有了孩子，但在一次吉普赛人来马孔多表演时又与一名吉普赛女郎相爱，于是他选择了出走；后来他回来了，但是性情琢磨不定。最后不顾家人的反对，与丽贝卡结婚，但被赶出家门，最后在家中被枪杀。老二奥雷里亚诺生于马孔多，在娘肚里就会哭，睁着眼睛出世，从小就赋有预见事物的本领，少年时就像父亲一样沉默寡言，整天埋头在父亲的实验室里做小金鱼。长大后爱上马孔多里正千金年幼的蕾梅黛丝，在此之前，他与哥哥的情人生有一子，名叫奥雷里亚诺·何塞。他美丽的怀有双胞胎的妻子因被阿玛兰妲误杀死去。后来他参加了内战，当上上校。他一生遭遇过14次暗杀，73次埋伏和一次枪决，均幸免于难，当他认识到这场战争是毫无意义的时候，便于政府签订和约，停止战争，然后对准心窝开枪自杀，可他却奇迹般的活了下来。 与17个外地女子姘居，生下17个男孩。这些男孩以后不约而同回马孔多寻根，却被追杀，一星期后，只有老大活下来。奥雷里亚诺年老归家，每日炼金子作小金鱼，每天做两条，达到25条时便放到坩埚里熔化，重新再做。他像父亲一样过着与世隔绝、孤独的日子，一直到死。老三是女儿阿玛兰妲，爱上了意大利钢琴技师皮埃特罗，在情敌丽贝卡放弃意大利人与何塞·阿尔卡蒂奥结婚后与意大利人交往，却又拒绝与意大利人结婚，意大利人为此自杀。由于悔恨，她故意烧伤一只手，终生用黑色绷带缠起来，决心永不嫁人。但她内心感到异常孤独、苦闷，甚至和刚刚成年的侄儿厮混，想用此作为“治疗病的临时药剂”。然而她始终无法摆脱内心的孤独，她把自己终日关在房中缝制衣，缝了拆，拆了缝，直至生命的最后一刻。家族第三代第三代人只有何塞·阿尔卡蒂奥的儿子阿尔卡蒂奥和奥雷里亚诺的儿子奥雷里亚诺·何塞。前者不知生母为谁，竟狂热地爱上自己的生母，几乎酿成大错。但又因生母的引见，爱上了桑塔索菲亚·德拉·彼达，后来成为马孔多的从未有过的暴君，贪赃枉法，最后被保守派军队枪毙。后者过早成熟，热恋着自己的姑母阿玛兰妲，因无法得到满足而陷入孤独之中，于是参军。进入军队之后仍然无法排遣对姑母的恋情，便去找妓女寻求安慰，借以摆脱孤独，最终也死于乱军之中。家族第四代第四代即是阿尔卡蒂奥与人私通生下的一女两男。女儿美人儿蕾梅黛丝楚楚动人，散发着引人不安的气味，这种气味曾将几个男人置于死地。她全身不穿衣服，套着一个布袋，只是不想把时间浪费在穿衣服上。这个独特的姑娘世事洞明，超然于外，最后神奇地抓着一个雪白的床单乘风而去，永远消失在空中。她的两个弟弟阿尔卡蒂奥第二和奥雷里亚诺第二是孪生子。阿尔卡蒂奥第二在美国人开办的香蕉公司里当监工，鼓动工人罢工，成为劳工领袖。后来，他带领三千多工人罢工，遭到军警的镇压，三千多人只他一人幸免。他目击政府用火车把工人们的尸体运往海边丢到大海，又通过电台宣布工人们暂时调到别处工作。阿尔卡蒂奥四处诉说他亲历的这场大屠杀揭露真相，反被认为神智不清。他无比恐惧失望，把自己关在房子里潜心研究吉卜赛人留下的羊皮手稿，一直到死他都呆在这个房间里。奥雷里亚诺第二没有正当的职业，终日纵情酒色，弃妻子费尔南达于不顾，在情妇佩特拉家中厮混。奇怪的是每当他与情妇同居时，他家的牲畜迅速地繁殖，给他带来了财富，一旦回到妻子身边，便家业破败。他与妻子生有二女一男，最后在病痛中与阿尔卡蒂奥同时死去，从生到死，人们一直没有认清他们兄弟俩儿谁是谁。家族第五代布恩迪亚家族的第五代是奥雷里亚诺第二的二女一男，长子何赛·阿尔卡蒂奥儿时便被送往罗马神学院去学习，母亲希望他日后能当主教，但他对此毫无兴趣，只是为了那假想中的遗产，才欺骗母亲说他在神学院学习。母亲死后，他回家靠变卖家业为生。后发现乌尔苏拉藏在地窖里的7000多个金币，从此过着更加放荡的生活，不久便被抢劫金币的歹徒杀死。大女儿雷纳塔·蕾梅黛丝（梅梅）爱上了香蕉公司汽车库的机修工马乌里肖·巴比伦，母亲禁止他们来往，他们只好暗中在浴室相会，母亲发现后禁止女儿外出，并请了保镖守在家里。 马乌里肖·巴比伦爬上梅梅家的屋顶，结果被保镖打中背部，终日卧病在床，被人当成偷鸡贼，孤独中老死。梅梅万念俱灰。她母亲认为家丑不外扬，将怀着身孕的她送往修道院，终生一言未发。小女儿阿玛兰妲·乌尔苏拉早年在布鲁塞尔上学，在那里与飞行员加斯通交往，交往后二人回到马孔多，见到一片凋敝，决心重整家园。她朝气蓬勃，充满活力，仅在三个月就使家园焕然一新。她的到来，使马孔多出现了一个最特别的人，她的情绪比这家族的人都好，她想把一切陈规陋习打入十八层地狱。她决定定居下来，拯救这个灾难深重的村镇。"
      },{
        bookName: '百年孤独',
        writer:"",
        img:"img/bainian.png",
        intro: "布恩迪亚家族的第二代有两男一女布恩迪亚家族的第二代有两男一女：老大何塞·阿尔卡蒂奥是在来马孔多的路上出生《百年孤独》中描绘的场景《百年孤独》中描绘的场景的，他在路上长大，像他父亲一样固执，但没有他父亲那样的想象力；他和一个叫庇拉尔·特尔内拉的女人私通，有了孩子，但在一次吉普赛人来马孔多表演时又与一名吉普赛女郎相爱，于是他选择了出走；后来他回来了，但是性情琢磨不定。最后不顾家人的反对，与丽贝卡结婚，但被赶出家门，最后在家中被枪杀。老二奥雷里亚诺生于马孔多，在娘肚里就会哭，睁着眼睛出世，从小就赋有预见事物的本领，少年时就像父亲一样沉默寡言，整天埋头在父亲的实验室里做小金鱼。长大后爱上马孔多里正千金年幼的蕾梅黛丝，在此之前，他与哥哥的情人生有一子，名叫奥雷里亚诺·何塞。他美丽的怀有双胞胎的妻子因被阿玛兰妲误杀死去。后来他参加了内战，当上上校。他一生遭遇过14次暗杀，73次埋伏和一次枪决，均幸免于难，当他认识到这场战争是毫无意义的时候，便于政府签订和约，停止战争，然后对准心窝开枪自杀，可他却奇迹般的活了下来。 与17个外地女子姘居，生下17个男孩。这些男孩以后不约而同回马孔多寻根，却被追杀，一星期后，只有老大活下来。奥雷里亚诺年老归家，每日炼金子作小金鱼，每天做两条，达到25条时便放到坩埚里熔化，重新再做。他像父亲一样过着与世隔绝、孤独的日子，一直到死。老三是女儿阿玛兰妲，爱上了意大利钢琴技师皮埃特罗，在情敌丽贝卡放弃意大利人与何塞·阿尔卡蒂奥结婚后与意大利人交往，却又拒绝与意大利人结婚，意大利人为此自杀。由于悔恨，她故意烧伤一只手，终生用黑色绷带缠起来，决心永不嫁人。但她内心感到异常孤独、苦闷，甚至和刚刚成年的侄儿厮混，想用此作为“治疗病的临时药剂”。然而她始终无法摆脱内心的孤独，她把自己终日关在房中缝制衣，缝了拆，拆了缝，直至生命的最后一刻。家族第三代第三代人只有何塞·阿尔卡蒂奥的儿子阿尔卡蒂奥和奥雷里亚诺的儿子奥雷里亚诺·何塞。前者不知生母为谁，竟狂热地爱上自己的生母，几乎酿成大错。但又因生母的引见，爱上了桑塔索菲亚·德拉·彼达，后来成为马孔多的从未有过的暴君，贪赃枉法，最后被保守派军队枪毙。后者过早成熟，热恋着自己的姑母阿玛兰妲，因无法得到满足而陷入孤独之中，于是参军。进入军队之后仍然无法排遣对姑母的恋情，便去找妓女寻求安慰，借以摆脱孤独，最终也死于乱军之中。家族第四代第四代即是阿尔卡蒂奥与人私通生下的一女两男。女儿美人儿蕾梅黛丝楚楚动人，散发着引人不安的气味，这种气味曾将几个男人置于死地。她全身不穿衣服，套着一个布袋，只是不想把时间浪费在穿衣服上。这个独特的姑娘世事洞明，超然于外，最后神奇地抓着一个雪白的床单乘风而去，永远消失在空中。她的两个弟弟阿尔卡蒂奥第二和奥雷里亚诺第二是孪生子。阿尔卡蒂奥第二在美国人开办的香蕉公司里当监工，鼓动工人罢工，成为劳工领袖。后来，他带领三千多工人罢工，遭到军警的镇压，三千多人只他一人幸免。他目击政府用火车把工人们的尸体运往海边丢到大海，又通过电台宣布工人们暂时调到别处工作。阿尔卡蒂奥四处诉说他亲历的这场大屠杀揭露真相，反被认为神智不清。他无比恐惧失望，把自己关在房子里潜心研究吉卜赛人留下的羊皮手稿，一直到死他都呆在这个房间里。奥雷里亚诺第二没有正当的职业，终日纵情酒色，弃妻子费尔南达于不顾，在情妇佩特拉家中厮混。奇怪的是每当他与情妇同居时，他家的牲畜迅速地繁殖，给他带来了财富，一旦回到妻子身边，便家业破败。他与妻子生有二女一男，最后在病痛中与阿尔卡蒂奥同时死去，从生到死，人们一直没有认清他们兄弟俩儿谁是谁。家族第五代布恩迪亚家族的第五代是奥雷里亚诺第二的二女一男，长子何赛·阿尔卡蒂奥儿时便被送往罗马神学院去学习，母亲希望他日后能当主教，但他对此毫无兴趣，只是为了那假想中的遗产，才欺骗母亲说他在神学院学习。母亲死后，他回家靠变卖家业为生。后发现乌尔苏拉藏在地窖里的7000多个金币，从此过着更加放荡的生活，不久便被抢劫金币的歹徒杀死。大女儿雷纳塔·蕾梅黛丝（梅梅）爱上了香蕉公司汽车库的机修工马乌里肖·巴比伦，母亲禁止他们来往，他们只好暗中在浴室相会，母亲发现后禁止女儿外出，并请了保镖守在家里。 马乌里肖·巴比伦爬上梅梅家的屋顶，结果被保镖打中背部，终日卧病在床，被人当成偷鸡贼，孤独中老死。梅梅万念俱灰。她母亲认为家丑不外扬，将怀着身孕的她送往修道院，终生一言未发。小女儿阿玛兰妲·乌尔苏拉早年在布鲁塞尔上学，在那里与飞行员加斯通交往，交往后二人回到马孔多，见到一片凋敝，决心重整家园。她朝气蓬勃，充满活力，仅在三个月就使家园焕然一新。她的到来，使马孔多出现了一个最特别的人，她的情绪比这家族的人都好，她想把一切陈规陋习打入十八层地狱。她决定定居下来，拯救这个灾难深重的村镇。"
      },{
        bookName: '百年孤独',
        writer:"",
        img:"img/bainian.png",
        intro: "布恩迪亚家族的第二代有两男一女布恩迪亚家族的第二代有两男一女：老大何塞·阿尔卡蒂奥是在来马孔多的路上出生《百年孤独》中描绘的场景《百年孤独》中描绘的场景的，他在路上长大，像他父亲一样固执，但没有他父亲那样的想象力；他和一个叫庇拉尔·特尔内拉的女人私通，有了孩子，但在一次吉普赛人来马孔多表演时又与一名吉普赛女郎相爱，于是他选择了出走；后来他回来了，但是性情琢磨不定。最后不顾家人的反对，与丽贝卡结婚，但被赶出家门，最后在家中被枪杀。老二奥雷里亚诺生于马孔多，在娘肚里就会哭，睁着眼睛出世，从小就赋有预见事物的本领，少年时就像父亲一样沉默寡言，整天埋头在父亲的实验室里做小金鱼。长大后爱上马孔多里正千金年幼的蕾梅黛丝，在此之前，他与哥哥的情人生有一子，名叫奥雷里亚诺·何塞。他美丽的怀有双胞胎的妻子因被阿玛兰妲误杀死去。后来他参加了内战，当上上校。他一生遭遇过14次暗杀，73次埋伏和一次枪决，均幸免于难，当他认识到这场战争是毫无意义的时候，便于政府签订和约，停止战争，然后对准心窝开枪自杀，可他却奇迹般的活了下来。 与17个外地女子姘居，生下17个男孩。这些男孩以后不约而同回马孔多寻根，却被追杀，一星期后，只有老大活下来。奥雷里亚诺年老归家，每日炼金子作小金鱼，每天做两条，达到25条时便放到坩埚里熔化，重新再做。他像父亲一样过着与世隔绝、孤独的日子，一直到死。老三是女儿阿玛兰妲，爱上了意大利钢琴技师皮埃特罗，在情敌丽贝卡放弃意大利人与何塞·阿尔卡蒂奥结婚后与意大利人交往，却又拒绝与意大利人结婚，意大利人为此自杀。由于悔恨，她故意烧伤一只手，终生用黑色绷带缠起来，决心永不嫁人。但她内心感到异常孤独、苦闷，甚至和刚刚成年的侄儿厮混，想用此作为“治疗病的临时药剂”。然而她始终无法摆脱内心的孤独，她把自己终日关在房中缝制衣，缝了拆，拆了缝，直至生命的最后一刻。家族第三代第三代人只有何塞·阿尔卡蒂奥的儿子阿尔卡蒂奥和奥雷里亚诺的儿子奥雷里亚诺·何塞。前者不知生母为谁，竟狂热地爱上自己的生母，几乎酿成大错。但又因生母的引见，爱上了桑塔索菲亚·德拉·彼达，后来成为马孔多的从未有过的暴君，贪赃枉法，最后被保守派军队枪毙。后者过早成熟，热恋着自己的姑母阿玛兰妲，因无法得到满足而陷入孤独之中，于是参军。进入军队之后仍然无法排遣对姑母的恋情，便去找妓女寻求安慰，借以摆脱孤独，最终也死于乱军之中。家族第四代第四代即是阿尔卡蒂奥与人私通生下的一女两男。女儿美人儿蕾梅黛丝楚楚动人，散发着引人不安的气味，这种气味曾将几个男人置于死地。她全身不穿衣服，套着一个布袋，只是不想把时间浪费在穿衣服上。这个独特的姑娘世事洞明，超然于外，最后神奇地抓着一个雪白的床单乘风而去，永远消失在空中。她的两个弟弟阿尔卡蒂奥第二和奥雷里亚诺第二是孪生子。阿尔卡蒂奥第二在美国人开办的香蕉公司里当监工，鼓动工人罢工，成为劳工领袖。后来，他带领三千多工人罢工，遭到军警的镇压，三千多人只他一人幸免。他目击政府用火车把工人们的尸体运往海边丢到大海，又通过电台宣布工人们暂时调到别处工作。阿尔卡蒂奥四处诉说他亲历的这场大屠杀揭露真相，反被认为神智不清。他无比恐惧失望，把自己关在房子里潜心研究吉卜赛人留下的羊皮手稿，一直到死他都呆在这个房间里。奥雷里亚诺第二没有正当的职业，终日纵情酒色，弃妻子费尔南达于不顾，在情妇佩特拉家中厮混。奇怪的是每当他与情妇同居时，他家的牲畜迅速地繁殖，给他带来了财富，一旦回到妻子身边，便家业破败。他与妻子生有二女一男，最后在病痛中与阿尔卡蒂奥同时死去，从生到死，人们一直没有认清他们兄弟俩儿谁是谁。家族第五代布恩迪亚家族的第五代是奥雷里亚诺第二的二女一男，长子何赛·阿尔卡蒂奥儿时便被送往罗马神学院去学习，母亲希望他日后能当主教，但他对此毫无兴趣，只是为了那假想中的遗产，才欺骗母亲说他在神学院学习。母亲死后，他回家靠变卖家业为生。后发现乌尔苏拉藏在地窖里的7000多个金币，从此过着更加放荡的生活，不久便被抢劫金币的歹徒杀死。大女儿雷纳塔·蕾梅黛丝（梅梅）爱上了香蕉公司汽车库的机修工马乌里肖·巴比伦，母亲禁止他们来往，他们只好暗中在浴室相会，母亲发现后禁止女儿外出，并请了保镖守在家里。 马乌里肖·巴比伦爬上梅梅家的屋顶，结果被保镖打中背部，终日卧病在床，被人当成偷鸡贼，孤独中老死。梅梅万念俱灰。她母亲认为家丑不外扬，将怀着身孕的她送往修道院，终生一言未发。小女儿阿玛兰妲·乌尔苏拉早年在布鲁塞尔上学，在那里与飞行员加斯通交往，交往后二人回到马孔多，见到一片凋敝，决心重整家园。她朝气蓬勃，充满活力，仅在三个月就使家园焕然一新。她的到来，使马孔多出现了一个最特别的人，她的情绪比这家族的人都好，她想把一切陈规陋习打入十八层地狱。她决定定居下来，拯救这个灾难深重的村镇。"
      },{
        bookName: '百年孤独',
        writer:"",
        img:"img/bainian.png",
        intro: "布恩迪亚家族的第二代有两男一女布恩迪亚家族的第二代有两男一女：老大何塞·阿尔卡蒂奥是在来马孔多的路上出生《百年孤独》中描绘的场景《百年孤独》中描绘的场景的，他在路上长大，像他父亲一样固执，但没有他父亲那样的想象力；他和一个叫庇拉尔·特尔内拉的女人私通，有了孩子，但在一次吉普赛人来马孔多表演时又与一名吉普赛女郎相爱，于是他选择了出走；后来他回来了，但是性情琢磨不定。最后不顾家人的反对，与丽贝卡结婚，但被赶出家门，最后在家中被枪杀。老二奥雷里亚诺生于马孔多，在娘肚里就会哭，睁着眼睛出世，从小就赋有预见事物的本领，少年时就像父亲一样沉默寡言，整天埋头在父亲的实验室里做小金鱼。长大后爱上马孔多里正千金年幼的蕾梅黛丝，在此之前，他与哥哥的情人生有一子，名叫奥雷里亚诺·何塞。他美丽的怀有双胞胎的妻子因被阿玛兰妲误杀死去。后来他参加了内战，当上上校。他一生遭遇过14次暗杀，73次埋伏和一次枪决，均幸免于难，当他认识到这场战争是毫无意义的时候，便于政府签订和约，停止战争，然后对准心窝开枪自杀，可他却奇迹般的活了下来。 与17个外地女子姘居，生下17个男孩。这些男孩以后不约而同回马孔多寻根，却被追杀，一星期后，只有老大活下来。奥雷里亚诺年老归家，每日炼金子作小金鱼，每天做两条，达到25条时便放到坩埚里熔化，重新再做。他像父亲一样过着与世隔绝、孤独的日子，一直到死。老三是女儿阿玛兰妲，爱上了意大利钢琴技师皮埃特罗，在情敌丽贝卡放弃意大利人与何塞·阿尔卡蒂奥结婚后与意大利人交往，却又拒绝与意大利人结婚，意大利人为此自杀。由于悔恨，她故意烧伤一只手，终生用黑色绷带缠起来，决心永不嫁人。但她内心感到异常孤独、苦闷，甚至和刚刚成年的侄儿厮混，想用此作为“治疗病的临时药剂”。然而她始终无法摆脱内心的孤独，她把自己终日关在房中缝制衣，缝了拆，拆了缝，直至生命的最后一刻。家族第三代第三代人只有何塞·阿尔卡蒂奥的儿子阿尔卡蒂奥和奥雷里亚诺的儿子奥雷里亚诺·何塞。前者不知生母为谁，竟狂热地爱上自己的生母，几乎酿成大错。但又因生母的引见，爱上了桑塔索菲亚·德拉·彼达，后来成为马孔多的从未有过的暴君，贪赃枉法，最后被保守派军队枪毙。后者过早成熟，热恋着自己的姑母阿玛兰妲，因无法得到满足而陷入孤独之中，于是参军。进入军队之后仍然无法排遣对姑母的恋情，便去找妓女寻求安慰，借以摆脱孤独，最终也死于乱军之中。家族第四代第四代即是阿尔卡蒂奥与人私通生下的一女两男。女儿美人儿蕾梅黛丝楚楚动人，散发着引人不安的气味，这种气味曾将几个男人置于死地。她全身不穿衣服，套着一个布袋，只是不想把时间浪费在穿衣服上。这个独特的姑娘世事洞明，超然于外，最后神奇地抓着一个雪白的床单乘风而去，永远消失在空中。她的两个弟弟阿尔卡蒂奥第二和奥雷里亚诺第二是孪生子。阿尔卡蒂奥第二在美国人开办的香蕉公司里当监工，鼓动工人罢工，成为劳工领袖。后来，他带领三千多工人罢工，遭到军警的镇压，三千多人只他一人幸免。他目击政府用火车把工人们的尸体运往海边丢到大海，又通过电台宣布工人们暂时调到别处工作。阿尔卡蒂奥四处诉说他亲历的这场大屠杀揭露真相，反被认为神智不清。他无比恐惧失望，把自己关在房子里潜心研究吉卜赛人留下的羊皮手稿，一直到死他都呆在这个房间里。奥雷里亚诺第二没有正当的职业，终日纵情酒色，弃妻子费尔南达于不顾，在情妇佩特拉家中厮混。奇怪的是每当他与情妇同居时，他家的牲畜迅速地繁殖，给他带来了财富，一旦回到妻子身边，便家业破败。他与妻子生有二女一男，最后在病痛中与阿尔卡蒂奥同时死去，从生到死，人们一直没有认清他们兄弟俩儿谁是谁。家族第五代布恩迪亚家族的第五代是奥雷里亚诺第二的二女一男，长子何赛·阿尔卡蒂奥儿时便被送往罗马神学院去学习，母亲希望他日后能当主教，但他对此毫无兴趣，只是为了那假想中的遗产，才欺骗母亲说他在神学院学习。母亲死后，他回家靠变卖家业为生。后发现乌尔苏拉藏在地窖里的7000多个金币，从此过着更加放荡的生活，不久便被抢劫金币的歹徒杀死。大女儿雷纳塔·蕾梅黛丝（梅梅）爱上了香蕉公司汽车库的机修工马乌里肖·巴比伦，母亲禁止他们来往，他们只好暗中在浴室相会，母亲发现后禁止女儿外出，并请了保镖守在家里。 马乌里肖·巴比伦爬上梅梅家的屋顶，结果被保镖打中背部，终日卧病在床，被人当成偷鸡贼，孤独中老死。梅梅万念俱灰。她母亲认为家丑不外扬，将怀着身孕的她送往修道院，终生一言未发。小女儿阿玛兰妲·乌尔苏拉早年在布鲁塞尔上学，在那里与飞行员加斯通交往，交往后二人回到马孔多，见到一片凋敝，决心重整家园。她朝气蓬勃，充满活力，仅在三个月就使家园焕然一新。她的到来，使马孔多出现了一个最特别的人，她的情绪比这家族的人都好，她想把一切陈规陋习打入十八层地狱。她决定定居下来，拯救这个灾难深重的村镇。"
      },{
        bookName: '百年孤独',
        writer:"",
        img:"img/bainian.png",
        intro: "布恩迪亚家族的第二代有两男一女布恩迪亚家族的第二代有两男一女：老大何塞·阿尔卡蒂奥是在来马孔多的路上出生《百年孤独》中描绘的场景《百年孤独》中描绘的场景的，他在路上长大，像他父亲一样固执，但没有他父亲那样的想象力；他和一个叫庇拉尔·特尔内拉的女人私通，有了孩子，但在一次吉普赛人来马孔多表演时又与一名吉普赛女郎相爱，于是他选择了出走；后来他回来了，但是性情琢磨不定。最后不顾家人的反对，与丽贝卡结婚，但被赶出家门，最后在家中被枪杀。老二奥雷里亚诺生于马孔多，在娘肚里就会哭，睁着眼睛出世，从小就赋有预见事物的本领，少年时就像父亲一样沉默寡言，整天埋头在父亲的实验室里做小金鱼。长大后爱上马孔多里正千金年幼的蕾梅黛丝，在此之前，他与哥哥的情人生有一子，名叫奥雷里亚诺·何塞。他美丽的怀有双胞胎的妻子因被阿玛兰妲误杀死去。后来他参加了内战，当上上校。他一生遭遇过14次暗杀，73次埋伏和一次枪决，均幸免于难，当他认识到这场战争是毫无意义的时候，便于政府签订和约，停止战争，然后对准心窝开枪自杀，可他却奇迹般的活了下来。 与17个外地女子姘居，生下17个男孩。这些男孩以后不约而同回马孔多寻根，却被追杀，一星期后，只有老大活下来。奥雷里亚诺年老归家，每日炼金子作小金鱼，每天做两条，达到25条时便放到坩埚里熔化，重新再做。他像父亲一样过着与世隔绝、孤独的日子，一直到死。老三是女儿阿玛兰妲，爱上了意大利钢琴技师皮埃特罗，在情敌丽贝卡放弃意大利人与何塞·阿尔卡蒂奥结婚后与意大利人交往，却又拒绝与意大利人结婚，意大利人为此自杀。由于悔恨，她故意烧伤一只手，终生用黑色绷带缠起来，决心永不嫁人。但她内心感到异常孤独、苦闷，甚至和刚刚成年的侄儿厮混，想用此作为“治疗病的临时药剂”。然而她始终无法摆脱内心的孤独，她把自己终日关在房中缝制衣，缝了拆，拆了缝，直至生命的最后一刻。家族第三代第三代人只有何塞·阿尔卡蒂奥的儿子阿尔卡蒂奥和奥雷里亚诺的儿子奥雷里亚诺·何塞。前者不知生母为谁，竟狂热地爱上自己的生母，几乎酿成大错。但又因生母的引见，爱上了桑塔索菲亚·德拉·彼达，后来成为马孔多的从未有过的暴君，贪赃枉法，最后被保守派军队枪毙。后者过早成熟，热恋着自己的姑母阿玛兰妲，因无法得到满足而陷入孤独之中，于是参军。进入军队之后仍然无法排遣对姑母的恋情，便去找妓女寻求安慰，借以摆脱孤独，最终也死于乱军之中。家族第四代第四代即是阿尔卡蒂奥与人私通生下的一女两男。女儿美人儿蕾梅黛丝楚楚动人，散发着引人不安的气味，这种气味曾将几个男人置于死地。她全身不穿衣服，套着一个布袋，只是不想把时间浪费在穿衣服上。这个独特的姑娘世事洞明，超然于外，最后神奇地抓着一个雪白的床单乘风而去，永远消失在空中。她的两个弟弟阿尔卡蒂奥第二和奥雷里亚诺第二是孪生子。阿尔卡蒂奥第二在美国人开办的香蕉公司里当监工，鼓动工人罢工，成为劳工领袖。后来，他带领三千多工人罢工，遭到军警的镇压，三千多人只他一人幸免。他目击政府用火车把工人们的尸体运往海边丢到大海，又通过电台宣布工人们暂时调到别处工作。阿尔卡蒂奥四处诉说他亲历的这场大屠杀揭露真相，反被认为神智不清。他无比恐惧失望，把自己关在房子里潜心研究吉卜赛人留下的羊皮手稿，一直到死他都呆在这个房间里。奥雷里亚诺第二没有正当的职业，终日纵情酒色，弃妻子费尔南达于不顾，在情妇佩特拉家中厮混。奇怪的是每当他与情妇同居时，他家的牲畜迅速地繁殖，给他带来了财富，一旦回到妻子身边，便家业破败。他与妻子生有二女一男，最后在病痛中与阿尔卡蒂奥同时死去，从生到死，人们一直没有认清他们兄弟俩儿谁是谁。家族第五代布恩迪亚家族的第五代是奥雷里亚诺第二的二女一男，长子何赛·阿尔卡蒂奥儿时便被送往罗马神学院去学习，母亲希望他日后能当主教，但他对此毫无兴趣，只是为了那假想中的遗产，才欺骗母亲说他在神学院学习。母亲死后，他回家靠变卖家业为生。后发现乌尔苏拉藏在地窖里的7000多个金币，从此过着更加放荡的生活，不久便被抢劫金币的歹徒杀死。大女儿雷纳塔·蕾梅黛丝（梅梅）爱上了香蕉公司汽车库的机修工马乌里肖·巴比伦，母亲禁止他们来往，他们只好暗中在浴室相会，母亲发现后禁止女儿外出，并请了保镖守在家里。 马乌里肖·巴比伦爬上梅梅家的屋顶，结果被保镖打中背部，终日卧病在床，被人当成偷鸡贼，孤独中老死。梅梅万念俱灰。她母亲认为家丑不外扬，将怀着身孕的她送往修道院，终生一言未发。小女儿阿玛兰妲·乌尔苏拉早年在布鲁塞尔上学，在那里与飞行员加斯通交往，交往后二人回到马孔多，见到一片凋敝，决心重整家园。她朝气蓬勃，充满活力，仅在三个月就使家园焕然一新。她的到来，使马孔多出现了一个最特别的人，她的情绪比这家族的人都好，她想把一切陈规陋习打入十八层地狱。她决定定居下来，拯救这个灾难深重的村镇。"
      },
        {
        bookName: '百年孤独',
          writer:"",
          img:"img/bainian.png",
        intro: "布恩迪亚家族的第二代有两男一女布恩迪亚家族的第二代有两男一女：老大何塞·阿尔卡蒂奥是在来马孔多的路上出生《百年孤独》中描绘的场景《百年孤独》中描绘的场景的，他在路上长大，像他父亲一样固执，但没有他父亲那样的想象力；他和一个叫庇拉尔·特尔内拉的女人私通，有了孩子，但在一次吉普赛人来马孔多表演时又与一名吉普赛女郎相爱，于是他选择了出走；后来他回来了，但是性情琢磨不定。最后不顾家人的反对，与丽贝卡结婚，但被赶出家门，最后在家中被枪杀。老二奥雷里亚诺生于马孔多，在娘肚里就会哭，睁着眼睛出世，从小就赋有预见事物的本领，少年时就像父亲一样沉默寡言，整天埋头在父亲的实验室里做小金鱼。长大后爱上马孔多里正千金年幼的蕾梅黛丝，在此之前，他与哥哥的情人生有一子，名叫奥雷里亚诺·何塞。他美丽的怀有双胞胎的妻子因被阿玛兰妲误杀死去。后来他参加了内战，当上上校。他一生遭遇过14次暗杀，73次埋伏和一次枪决，均幸免于难，当他认识到这场战争是毫无意义的时候，便于政府签订和约，停止战争，然后对准心窝开枪自杀，可他却奇迹般的活了下来。 与17个外地女子姘居，生下17个男孩。这些男孩以后不约而同回马孔多寻根，却被追杀，一星期后，只有老大活下来。奥雷里亚诺年老归家，每日炼金子作小金鱼，每天做两条，达到25条时便放到坩埚里熔化，重新再做。他像父亲一样过着与世隔绝、孤独的日子，一直到死。老三是女儿阿玛兰妲，爱上了意大利钢琴技师皮埃特罗，在情敌丽贝卡放弃意大利人与何塞·阿尔卡蒂奥结婚后与意大利人交往，却又拒绝与意大利人结婚，意大利人为此自杀。由于悔恨，她故意烧伤一只手，终生用黑色绷带缠起来，决心永不嫁人。但她内心感到异常孤独、苦闷，甚至和刚刚成年的侄儿厮混，想用此作为“治疗病的临时药剂”。然而她始终无法摆脱内心的孤独，她把自己终日关在房中缝制衣，缝了拆，拆了缝，直至生命的最后一刻。家族第三代第三代人只有何塞·阿尔卡蒂奥的儿子阿尔卡蒂奥和奥雷里亚诺的儿子奥雷里亚诺·何塞。前者不知生母为谁，竟狂热地爱上自己的生母，几乎酿成大错。但又因生母的引见，爱上了桑塔索菲亚·德拉·彼达，后来成为马孔多的从未有过的暴君，贪赃枉法，最后被保守派军队枪毙。后者过早成熟，热恋着自己的姑母阿玛兰妲，因无法得到满足而陷入孤独之中，于是参军。进入军队之后仍然无法排遣对姑母的恋情，便去找妓女寻求安慰，借以摆脱孤独，最终也死于乱军之中。家族第四代第四代即是阿尔卡蒂奥与人私通生下的一女两男。女儿美人儿蕾梅黛丝楚楚动人，散发着引人不安的气味，这种气味曾将几个男人置于死地。她全身不穿衣服，套着一个布袋，只是不想把时间浪费在穿衣服上。这个独特的姑娘世事洞明，超然于外，最后神奇地抓着一个雪白的床单乘风而去，永远消失在空中。她的两个弟弟阿尔卡蒂奥第二和奥雷里亚诺第二是孪生子。阿尔卡蒂奥第二在美国人开办的香蕉公司里当监工，鼓动工人罢工，成为劳工领袖。后来，他带领三千多工人罢工，遭到军警的镇压，三千多人只他一人幸免。他目击政府用火车把工人们的尸体运往海边丢到大海，又通过电台宣布工人们暂时调到别处工作。阿尔卡蒂奥四处诉说他亲历的这场大屠杀揭露真相，反被认为神智不清。他无比恐惧失望，把自己关在房子里潜心研究吉卜赛人留下的羊皮手稿，一直到死他都呆在这个房间里。奥雷里亚诺第二没有正当的职业，终日纵情酒色，弃妻子费尔南达于不顾，在情妇佩特拉家中厮混。奇怪的是每当他与情妇同居时，他家的牲畜迅速地繁殖，给他带来了财富，一旦回到妻子身边，便家业破败。他与妻子生有二女一男，最后在病痛中与阿尔卡蒂奥同时死去，从生到死，人们一直没有认清他们兄弟俩儿谁是谁。家族第五代布恩迪亚家族的第五代是奥雷里亚诺第二的二女一男，长子何赛·阿尔卡蒂奥儿时便被送往罗马神学院去学习，母亲希望他日后能当主教，但他对此毫无兴趣，只是为了那假想中的遗产，才欺骗母亲说他在神学院学习。母亲死后，他回家靠变卖家业为生。后发现乌尔苏拉藏在地窖里的7000多个金币，从此过着更加放荡的生活，不久便被抢劫金币的歹徒杀死。大女儿雷纳塔·蕾梅黛丝（梅梅）爱上了香蕉公司汽车库的机修工马乌里肖·巴比伦，母亲禁止他们来往，他们只好暗中在浴室相会，母亲发现后禁止女儿外出，并请了保镖守在家里。 马乌里肖·巴比伦爬上梅梅家的屋顶，结果被保镖打中背部，终日卧病在床，被人当成偷鸡贼，孤独中老死。梅梅万念俱灰。她母亲认为家丑不外扬，将怀着身孕的她送往修道院，终生一言未发。小女儿阿玛兰妲·乌尔苏拉早年在布鲁塞尔上学，在那里与飞行员加斯通交往，交往后二人回到马孔多，见到一片凋敝，决心重整家园。她朝气蓬勃，充满活力，仅在三个月就使家园焕然一新。她的到来，使马孔多出现了一个最特别的人，她的情绪比这家族的人都好，她想把一切陈规陋习打入十八层地狱。她决定定居下来，拯救这个灾难深重的村镇。"
      },{
        bookName: '百年孤独',
        writer:"",
        img:'img/bainian.png',
        intro: "布恩迪亚家族的第二代有两男一女布恩迪亚家族的第二代有两男一女：老大何塞·阿尔卡蒂奥是在来马孔多的路上出生《百年孤独》中描绘的场景《百年孤独》中描绘的场景的，他在路上长大，像他父亲一样固执，但没有他父亲那样的想象力；他和一个叫庇拉尔·特尔内拉的女人私通，有了孩子，但在一次吉普赛人来马孔多表演时又与一名吉普赛女郎相爱，于是他选择了出走；后来他回来了，但是性情琢磨不定。最后不顾家人的反对，与丽贝卡结婚，但被赶出家门，最后在家中被枪杀。老二奥雷里亚诺生于马孔多，在娘肚里就会哭，睁着眼睛出世，从小就赋有预见事物的本领，少年时就像父亲一样沉默寡言，整天埋头在父亲的实验室里做小金鱼。长大后爱上马孔多里正千金年幼的蕾梅黛丝，在此之前，他与哥哥的情人生有一子，名叫奥雷里亚诺·何塞。他美丽的怀有双胞胎的妻子因被阿玛兰妲误杀死去。后来他参加了内战，当上上校。他一生遭遇过14次暗杀，73次埋伏和一次枪决，均幸免于难，当他认识到这场战争是毫无意义的时候，便于政府签订和约，停止战争，然后对准心窝开枪自杀，可他却奇迹般的活了下来。 与17个外地女子姘居，生下17个男孩。这些男孩以后不约而同回马孔多寻根，却被追杀，一星期后，只有老大活下来。奥雷里亚诺年老归家，每日炼金子作小金鱼，每天做两条，达到25条时便放到坩埚里熔化，重新再做。他像父亲一样过着与世隔绝、孤独的日子，一直到死。老三是女儿阿玛兰妲，爱上了意大利钢琴技师皮埃特罗，在情敌丽贝卡放弃意大利人与何塞·阿尔卡蒂奥结婚后与意大利人交往，却又拒绝与意大利人结婚，意大利人为此自杀。由于悔恨，她故意烧伤一只手，终生用黑色绷带缠起来，决心永不嫁人。但她内心感到异常孤独、苦闷，甚至和刚刚成年的侄儿厮混，想用此作为“治疗病的临时药剂”。然而她始终无法摆脱内心的孤独，她把自己终日关在房中缝制衣，缝了拆，拆了缝，直至生命的最后一刻。家族第三代第三代人只有何塞·阿尔卡蒂奥的儿子阿尔卡蒂奥和奥雷里亚诺的儿子奥雷里亚诺·何塞。前者不知生母为谁，竟狂热地爱上自己的生母，几乎酿成大错。但又因生母的引见，爱上了桑塔索菲亚·德拉·彼达，后来成为马孔多的从未有过的暴君，贪赃枉法，最后被保守派军队枪毙。后者过早成熟，热恋着自己的姑母阿玛兰妲，因无法得到满足而陷入孤独之中，于是参军。进入军队之后仍然无法排遣对姑母的恋情，便去找妓女寻求安慰，借以摆脱孤独，最终也死于乱军之中。家族第四代第四代即是阿尔卡蒂奥与人私通生下的一女两男。女儿美人儿蕾梅黛丝楚楚动人，散发着引人不安的气味，这种气味曾将几个男人置于死地。她全身不穿衣服，套着一个布袋，只是不想把时间浪费在穿衣服上。这个独特的姑娘世事洞明，超然于外，最后神奇地抓着一个雪白的床单乘风而去，永远消失在空中。她的两个弟弟阿尔卡蒂奥第二和奥雷里亚诺第二是孪生子。阿尔卡蒂奥第二在美国人开办的香蕉公司里当监工，鼓动工人罢工，成为劳工领袖。后来，他带领三千多工人罢工，遭到军警的镇压，三千多人只他一人幸免。他目击政府用火车把工人们的尸体运往海边丢到大海，又通过电台宣布工人们暂时调到别处工作。阿尔卡蒂奥四处诉说他亲历的这场大屠杀揭露真相，反被认为神智不清。他无比恐惧失望，把自己关在房子里潜心研究吉卜赛人留下的羊皮手稿，一直到死他都呆在这个房间里。奥雷里亚诺第二没有正当的职业，终日纵情酒色，弃妻子费尔南达于不顾，在情妇佩特拉家中厮混。奇怪的是每当他与情妇同居时，他家的牲畜迅速地繁殖，给他带来了财富，一旦回到妻子身边，便家业破败。他与妻子生有二女一男，最后在病痛中与阿尔卡蒂奥同时死去，从生到死，人们一直没有认清他们兄弟俩儿谁是谁。家族第五代布恩迪亚家族的第五代是奥雷里亚诺第二的二女一男，长子何赛·阿尔卡蒂奥儿时便被送往罗马神学院去学习，母亲希望他日后能当主教，但他对此毫无兴趣，只是为了那假想中的遗产，才欺骗母亲说他在神学院学习。母亲死后，他回家靠变卖家业为生。后发现乌尔苏拉藏在地窖里的7000多个金币，从此过着更加放荡的生活，不久便被抢劫金币的歹徒杀死。大女儿雷纳塔·蕾梅黛丝（梅梅）爱上了香蕉公司汽车库的机修工马乌里肖·巴比伦，母亲禁止他们来往，他们只好暗中在浴室相会，母亲发现后禁止女儿外出，并请了保镖守在家里。 马乌里肖·巴比伦爬上梅梅家的屋顶，结果被保镖打中背部，终日卧病在床，被人当成偷鸡贼，孤独中老死。梅梅万念俱灰。她母亲认为家丑不外扬，将怀着身孕的她送往修道院，终生一言未发。小女儿阿玛兰妲·乌尔苏拉早年在布鲁塞尔上学，在那里与飞行员加斯通交往，交往后二人回到马孔多，见到一片凋敝，决心重整家园。她朝气蓬勃，充满活力，仅在三个月就使家园焕然一新。她的到来，使马孔多出现了一个最特别的人，她的情绪比这家族的人都好，她想把一切陈规陋习打入十八层地狱。她决定定居下来，拯救这个灾难深重的村镇。"
      },
        {
          bookName: '百年孤独',
          writer:"",
          img:"img/bainian.png",
          intro: "布恩迪亚家族的第二代有两男一女布恩迪亚家族的第二代有两男一女：老大何塞·阿尔卡蒂奥是在来马孔多的路上出生《百年孤独》中描绘的场景《百年孤独》中描绘的场景的，他在路上长大，像他父亲一样固执，但没有他父亲那样的想象力；他和一个叫庇拉尔·特尔内拉的女人私通，有了孩子，但在一次吉普赛人来马孔多表演时又与一名吉普赛女郎相爱，于是他选择了出走；后来他回来了，但是性情琢磨不定。最后不顾家人的反对，与丽贝卡结婚，但被赶出家门，最后在家中被枪杀。老二奥雷里亚诺生于马孔多，在娘肚里就会哭，睁着眼睛出世，从小就赋有预见事物的本领，少年时就像父亲一样沉默寡言，整天埋头在父亲的实验室里做小金鱼。长大后爱上马孔多里正千金年幼的蕾梅黛丝，在此之前，他与哥哥的情人生有一子，名叫奥雷里亚诺·何塞。他美丽的怀有双胞胎的妻子因被阿玛兰妲误杀死去。后来他参加了内战，当上上校。他一生遭遇过14次暗杀，73次埋伏和一次枪决，均幸免于难，当他认识到这场战争是毫无意义的时候，便于政府签订和约，停止战争，然后对准心窝开枪自杀，可他却奇迹般的活了下来。 与17个外地女子姘居，生下17个男孩。这些男孩以后不约而同回马孔多寻根，却被追杀，一星期后，只有老大活下来。奥雷里亚诺年老归家，每日炼金子作小金鱼，每天做两条，达到25条时便放到坩埚里熔化，重新再做。他像父亲一样过着与世隔绝、孤独的日子，一直到死。老三是女儿阿玛兰妲，爱上了意大利钢琴技师皮埃特罗，在情敌丽贝卡放弃意大利人与何塞·阿尔卡蒂奥结婚后与意大利人交往，却又拒绝与意大利人结婚，意大利人为此自杀。由于悔恨，她故意烧伤一只手，终生用黑色绷带缠起来，决心永不嫁人。但她内心感到异常孤独、苦闷，甚至和刚刚成年的侄儿厮混，想用此作为“治疗病的临时药剂”。然而她始终无法摆脱内心的孤独，她把自己终日关在房中缝制衣，缝了拆，拆了缝，直至生命的最后一刻。家族第三代第三代人只有何塞·阿尔卡蒂奥的儿子阿尔卡蒂奥和奥雷里亚诺的儿子奥雷里亚诺·何塞。前者不知生母为谁，竟狂热地爱上自己的生母，几乎酿成大错。但又因生母的引见，爱上了桑塔索菲亚·德拉·彼达，后来成为马孔多的从未有过的暴君，贪赃枉法，最后被保守派军队枪毙。后者过早成熟，热恋着自己的姑母阿玛兰妲，因无法得到满足而陷入孤独之中，于是参军。进入军队之后仍然无法排遣对姑母的恋情，便去找妓女寻求安慰，借以摆脱孤独，最终也死于乱军之中。家族第四代第四代即是阿尔卡蒂奥与人私通生下的一女两男。女儿美人儿蕾梅黛丝楚楚动人，散发着引人不安的气味，这种气味曾将几个男人置于死地。她全身不穿衣服，套着一个布袋，只是不想把时间浪费在穿衣服上。这个独特的姑娘世事洞明，超然于外，最后神奇地抓着一个雪白的床单乘风而去，永远消失在空中。她的两个弟弟阿尔卡蒂奥第二和奥雷里亚诺第二是孪生子。阿尔卡蒂奥第二在美国人开办的香蕉公司里当监工，鼓动工人罢工，成为劳工领袖。后来，他带领三千多工人罢工，遭到军警的镇压，三千多人只他一人幸免。他目击政府用火车把工人们的尸体运往海边丢到大海，又通过电台宣布工人们暂时调到别处工作。阿尔卡蒂奥四处诉说他亲历的这场大屠杀揭露真相，反被认为神智不清。他无比恐惧失望，把自己关在房子里潜心研究吉卜赛人留下的羊皮手稿，一直到死他都呆在这个房间里。奥雷里亚诺第二没有正当的职业，终日纵情酒色，弃妻子费尔南达于不顾，在情妇佩特拉家中厮混。奇怪的是每当他与情妇同居时，他家的牲畜迅速地繁殖，给他带来了财富，一旦回到妻子身边，便家业破败。他与妻子生有二女一男，最后在病痛中与阿尔卡蒂奥同时死去，从生到死，人们一直没有认清他们兄弟俩儿谁是谁。家族第五代布恩迪亚家族的第五代是奥雷里亚诺第二的二女一男，长子何赛·阿尔卡蒂奥儿时便被送往罗马神学院去学习，母亲希望他日后能当主教，但他对此毫无兴趣，只是为了那假想中的遗产，才欺骗母亲说他在神学院学习。母亲死后，他回家靠变卖家业为生。后发现乌尔苏拉藏在地窖里的7000多个金币，从此过着更加放荡的生活，不久便被抢劫金币的歹徒杀死。大女儿雷纳塔·蕾梅黛丝（梅梅）爱上了香蕉公司汽车库的机修工马乌里肖·巴比伦，母亲禁止他们来往，他们只好暗中在浴室相会，母亲发现后禁止女儿外出，并请了保镖守在家里。 马乌里肖·巴比伦爬上梅梅家的屋顶，结果被保镖打中背部，终日卧病在床，被人当成偷鸡贼，孤独中老死。梅梅万念俱灰。她母亲认为家丑不外扬，将怀着身孕的她送往修道院，终生一言未发。小女儿阿玛兰妲·乌尔苏拉早年在布鲁塞尔上学，在那里与飞行员加斯通交往，交往后二人回到马孔多，见到一片凋敝，决心重整家园。她朝气蓬勃，充满活力，仅在三个月就使家园焕然一新。她的到来，使马孔多出现了一个最特别的人，她的情绪比这家族的人都好，她想把一切陈规陋习打入十八层地狱。她决定定居下来，拯救这个灾难深重的村镇。"
        }];
    return {
      all: function() {
        return books;
      },
      remove: function(book) {
        books.splice(book);
      },
      get:function (bookName) {
        for (var i = 0; i < books.length; i++) {
          if (angular.equals(bookName,books[i].name)) {
            return books[i];
          }
        }
        return null;

      }

    };

  })
//个人收藏书库
.factory('personalBookStore',function(){
  var books=
    [{
    name: '百年孤独',
    content: "布恩迪亚家族的第二代有两男一女布恩迪亚家族的第二代有两男一女：老大何塞·阿尔卡蒂奥是在来马孔多的路上出生《百年孤独》中描绘的场景《百年孤独》中描绘的场景的，他在路上长大，像他父亲一样固执，但没有他父亲那样的想象力；他和一个叫庇拉尔·特尔内拉的女人私通，有了孩子，但在一次吉普赛人来马孔多表演时又与一名吉普赛女郎相爱，于是他选择了出走；后来他回来了，但是性情琢磨不定。最后不顾家人的反对，与丽贝卡结婚，但被赶出家门，最后在家中被枪杀。老二奥雷里亚诺生于马孔多，在娘肚里就会哭，睁着眼睛出世，从小就赋有预见事物的本领，少年时就像父亲一样沉默寡言，整天埋头在父亲的实验室里做小金鱼。长大后爱上马孔多里正千金年幼的蕾梅黛丝，在此之前，他与哥哥的情人生有一子，名叫奥雷里亚诺·何塞。他美丽的怀有双胞胎的妻子因被阿玛兰妲误杀死去。后来他参加了内战，当上上校。他一生遭遇过14次暗杀，73次埋伏和一次枪决，均幸免于难，当他认识到这场战争是毫无意义的时候，便于政府签订和约，停止战争，然后对准心窝开枪自杀，可他却奇迹般的活了下来。 与17个外地女子姘居，生下17个男孩。这些男孩以后不约而同回马孔多寻根，却被追杀，一星期后，只有老大活下来。奥雷里亚诺年老归家，每日炼金子作小金鱼，每天做两条，达到25条时便放到坩埚里熔化，重新再做。他像父亲一样过着与世隔绝、孤独的日子，一直到死。老三是女儿阿玛兰妲，爱上了意大利钢琴技师皮埃特罗，在情敌丽贝卡放弃意大利人与何塞·阿尔卡蒂奥结婚后与意大利人交往，却又拒绝与意大利人结婚，意大利人为此自杀。由于悔恨，她故意烧伤一只手，终生用黑色绷带缠起来，决心永不嫁人。但她内心感到异常孤独、苦闷，甚至和刚刚成年的侄儿厮混，想用此作为“治疗病的临时药剂”。然而她始终无法摆脱内心的孤独，她把自己终日关在房中缝制衣，缝了拆，拆了缝，直至生命的最后一刻。家族第三代第三代人只有何塞·阿尔卡蒂奥的儿子阿尔卡蒂奥和奥雷里亚诺的儿子奥雷里亚诺·何塞。前者不知生母为谁，竟狂热地爱上自己的生母，几乎酿成大错。但又因生母的引见，爱上了桑塔索菲亚·德拉·彼达，后来成为马孔多的从未有过的暴君，贪赃枉法，最后被保守派军队枪毙。后者过早成熟，热恋着自己的姑母阿玛兰妲，因无法得到满足而陷入孤独之中，于是参军。进入军队之后仍然无法排遣对姑母的恋情，便去找妓女寻求安慰，借以摆脱孤独，最终也死于乱军之中。家族第四代第四代即是阿尔卡蒂奥与人私通生下的一女两男。女儿美人儿蕾梅黛丝楚楚动人，散发着引人不安的气味，这种气味曾将几个男人置于死地。她全身不穿衣服，套着一个布袋，只是不想把时间浪费在穿衣服上。这个独特的姑娘世事洞明，超然于外，最后神奇地抓着一个雪白的床单乘风而去，永远消失在空中。她的两个弟弟阿尔卡蒂奥第二和奥雷里亚诺第二是孪生子。阿尔卡蒂奥第二在美国人开办的香蕉公司里当监工，鼓动工人罢工，成为劳工领袖。后来，他带领三千多工人罢工，遭到军警的镇压，三千多人只他一人幸免。他目击政府用火车把工人们的尸体运往海边丢到大海，又通过电台宣布工人们暂时调到别处工作。阿尔卡蒂奥四处诉说他亲历的这场大屠杀揭露真相，反被认为神智不清。他无比恐惧失望，把自己关在房子里潜心研究吉卜赛人留下的羊皮手稿，一直到死他都呆在这个房间里。奥雷里亚诺第二没有正当的职业，终日纵情酒色，弃妻子费尔南达于不顾，在情妇佩特拉家中厮混。奇怪的是每当他与情妇同居时，他家的牲畜迅速地繁殖，给他带来了财富，一旦回到妻子身边，便家业破败。他与妻子生有二女一男，最后在病痛中与阿尔卡蒂奥同时死去，从生到死，人们一直没有认清他们兄弟俩儿谁是谁。家族第五代布恩迪亚家族的第五代是奥雷里亚诺第二的二女一男，长子何赛·阿尔卡蒂奥儿时便被送往罗马神学院去学习，母亲希望他日后能当主教，但他对此毫无兴趣，只是为了那假想中的遗产，才欺骗母亲说他在神学院学习。母亲死后，他回家靠变卖家业为生。后发现乌尔苏拉藏在地窖里的7000多个金币，从此过着更加放荡的生活，不久便被抢劫金币的歹徒杀死。大女儿雷纳塔·蕾梅黛丝（梅梅）爱上了香蕉公司汽车库的机修工马乌里肖·巴比伦，母亲禁止他们来往，他们只好暗中在浴室相会，母亲发现后禁止女儿外出，并请了保镖守在家里。 马乌里肖·巴比伦爬上梅梅家的屋顶，结果被保镖打中背部，终日卧病在床，被人当成偷鸡贼，孤独中老死。梅梅万念俱灰。她母亲认为家丑不外扬，将怀着身孕的她送往修道院，终生一言未发。小女儿阿玛兰妲·乌尔苏拉早年在布鲁塞尔上学，在那里与飞行员加斯通交往，交往后二人回到马孔多，见到一片凋敝，决心重整家园。她朝气蓬勃，充满活力，仅在三个月就使家园焕然一新。她的到来，使马孔多出现了一个最特别的人，她的情绪比这家族的人都好，她想把一切陈规陋习打入十八层地狱。她决定定居下来，拯救这个灾难深重的村镇。"
  },{
      name:'时间简史',
      content:'时间到底是什么？时间可逆转吗？可以穿越时间隧道去旅行吗？宇宙有没有边缘？到底是什么？时间可逆转吗？可以穿越时间隧道去旅行吗？宇宙有没有边缘？到底是什么？时间可逆转吗？可以穿越时间隧道去旅行吗？宇宙有没有边缘？到底是什么？时间可逆转吗？可以穿越时间隧道去旅行吗？宇宙有没有边缘？到底是什么？时间可逆转吗？可以穿越时间隧道去旅行吗？宇宙有没有边缘？到底是什么？时间可逆转吗？可以穿越时间隧道去旅行吗？宇宙有没有边缘？到底是什么？时间可逆转吗？可以穿越时间隧道去旅行吗？宇宙有没有边缘？宇宙起源于哪里，未来会怎样？……这些问题困住了众多的哲学家和科学家。而在霍金这里，这些难题迎刃而解。他的《时间简史》在科学界、出版界都鼎鼎有名。因为他清晰地解读了宇宙学的很多问题，将高深的理论物理学通俗化，向大众普及。尽管如此，书中的一些复杂概念、逻辑关系还是有些难度，没有一定物理学基础很难真正读懂，所以说，此书有很大的简化空间。为此，《图解时间简史》对《时间简史》进行了通俗的阐释，增配了大量图片、示意图、图解，为更好地理解霍金的思想提供了捷径，带给你一个人人都可以读懂的霍金！'
    },
    {
      name:'多米诺',
      content:'时间到底是什么？时间可逆转吗？可以穿越时间隧道去旅行吗？宇宙有没有边缘？宇宙起源于哪里，未来会怎样？……这些问题困住了众多的哲学家和科学家。而在霍金这里，这些难题迎刃而解。他的《时间简史》在科学界、出版界都鼎鼎有名。因为他清晰地解读了宇宙学的很多问题，将高深的理论物理学通俗化，向大众普及。尽管如此，书中的一些复杂概念、逻辑关系还是有些难度，没有一定物理学基础很难真正读懂，所以说，此书有很大的简化空间。为此，《图解时间简史》对《时间简史》进行了通俗的阐释，增配了大量图片、示意图、图解，为更好地理解霍金的思想提供了捷径，带给你一个人人都可以读懂的霍金！'
    }];
  return {
    all: function() {
      return books;
    },
    remove: function(book) {
      books.splice(book);
    },
    get:function (bookName) {
      for (var i = 0; i < books.length; i++) {
        if (angular.equals(bookName,books[i].name)) {
          return books[i];
        }
      }
      return null;

    }

  };

})

.factory('Storage', function() {
  return {
    set: function(key, data) {
      return window.localStorage.setItem(key, window.JSON.stringify(data));
    },
    get: function(key) {

      return window.JSON.parse(window.localStorage.getItem(key));
    },
    remove: function(key) {
      return window.localStorage.removeItem(key);
    }
  }
})
/*
.factory('UserInterceptor', ["$q","$rootScope",function ($q,$rootScope) {
  return {
    request:function(config){
      config.headers["TOKEN"] = $rootScope.user.token;
      return config;
    },
    responseError: function (response) {
      var data = response.data;
      // 判断错误码，如果是未登录
      if(data["errorCode"] == "500999"){
        // 清空用户本地token存储的信息，如果
        $rootScope.user = {token:""};
        // 全局事件，方便其他view获取该事件，并给以相应的提示或处理
        $rootScope.$emit("userIntercepted","notLogin",response);
      }
      // 如果是登录超时
      if(data["errorCode"] == "500998"){
        $rootScope.$emit("userIntercepted","sessionOut",response);
      }
      return $q.reject(response);
    }
  };
}])*/;
