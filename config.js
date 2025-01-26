import dotenv from 'dotenv';
dotenv.config();

const config = {
	SESSION_ID: process.env.SESSION_ID || 'NIKKA_73_82_63',
	SUDO: process.env.SUDO || '',
	API_ID: process.env.API_ID || 'https://xstro-api-4fb28ece11a9.herokuapp.com',
	BOT_INFO: process.env.BOT_INFO || 'NIKKA_73_82_63',
	STICKER_PACK: process.env.STICKER_PACK || '☯︎ᴇᴍᴍ ʏʏ✌︎💨',
	WARN_COUNT: process.env.WARN_COUNT || 3,
	TIME_ZONE: process.env.TIME_ZONE || 'Africa/Lagos',
	DEBUG: process.env.DEBUG || false,
	VERSION: '1.2.2'
};

const getSessionId = async () =>
	(await fetch(`https://nikkaxsession.onrender.com/uploads/${config.SESSION_ID}/session.json`)
		.then(res => (res.ok ? res.json() : null))
		.catch(() => null)) ?? null;

const sessionData = await getSessionId();

export { config, sessionData };
export default { config, sessionData };
