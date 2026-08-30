async function init(){
    document.getElementById('backendLabel').textContent =
        apiBase() ? `Backend: ${apiBase()}` : 'Backend not configured';

    document.getElementById('discordLogin').onclick = () => {
        if(!apiBase() || apiBase().includes('YOUR-PANEL')){
            return showAuth('Open config.js and set your Wispbyte backend URL first.');
        }

        location.href = apiBase() + '/login/discord';
    };

    await exchangeAuthCode();

    if(!token()){
        showAuth();
        return;
    }

    try{
        state.me = await api('/api/me');

        showDashboard();
        applyRole();

        await loadBots();

        const saved = localStorage.getItem('zbc_view') || 'overview';

        if(state.me.role === 'staff'){
            setView('bots');
        }
        else if(
            state.me.role === 'admin' &&
            ['permissions','developer'].includes(saved)
        ){
            setView('overview');
        }
        else{
            setView(saved);
        }

        setInterval(loadBots,15000);

    }catch(e){
        sessionStorage.removeItem('zbc_token');
        showAuth('Session expired. Sign in again.');
    }
}
