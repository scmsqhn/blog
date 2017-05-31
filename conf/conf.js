var conf = {
	mysql:{
			host	: 'host',
 		//	port	:  3389,
			user	: 'user',
			password: 'password',
			database: 'database',
			tables: {
				TABLE_ARTICLE:'tb_article',
				TABLE_FEATURE:'tb_feature',
				TABLE_USER:'tb_user',
				TABLE_DISCUSS:'tb_discuss',
				TABLE_VISITOR:'tb_visitor'
			}
	},
	article:{
		storePath: '/public/html/article',
		templatePath: '/public/template/article.pug',
		css: '2.css'
	},
	website:{
		title:"小安安的家",
		domain:"Anan is in the House",
		ICP:"备案中..."
	},
	master:{
		nickname:"秦海宁",
		summary:"coder",
		instructionPartOne:" 机器学习,比特币,NPL,微信生态,node.js",
		instructionPartTwo:" 这里是海宁的QQ",
		weibo:"http://weibo.com/qinhaining",
		github:"https://github.com/scmsqhn",
		zhihu:"https://zhuanlan.zhihu.com/scmsqhn"
	},
	database:{
	//	storePath: '/usr/share/nginx/blog/backup',
		storePath: '/data/db',
		autoBackup:false,
		interval: 60
	},
	articleCssList:[
		{name:'简约',file:'1.css'},
		{name:'艳丽',file:'2.css'},
		{name:'默认',file:'3.css'}
	]
};

module.exports = conf;
