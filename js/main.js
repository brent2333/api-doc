import { responses } from "./responses.js";
import { endpointsLoad } from "./endpointsLoad.js";
import { userCalls } from "./userCalls.js";

(function() {
    window.addEventListener('DOMContentLoaded', (event) => {
        function getToken() {
            const tokenEndpoint = 'https://security-eapi-qa.us-ea1-01.api.fleetcor.com/api/v1/app/token';
        const tokenOptions = {
          'method': 'POST',
          'url': 'https://security-eapi-qa.us-ea1-01.api.fleetcor.com/api/v1/app/token',
          'headers': {
            'Content-Type': 'application/json',
            'Cookie': 'incap_ses_239_2375492=dZjGcCyuG28wlDG5cxlRA9ZBT2IAAAAA+XdXSSJ38QRgaLeqmFdIBA==; nlbi_2375492=aNaADiUwhigOoFRj9cy8+wAAAAAh0sYfB7HyHuzeDbO4T/GJ; visid_incap_2375492=lEjZwSCxQiyctOs5LoQ+oD6ATGIAAAAAQUIPAAAAAAB4aJoaTlSZT+L0/kI6JDc8'
          },
          body: JSON.stringify({
            "client_id": "0oa3rv4v5vlMbzR9o0x7",
            "client_secret": "6tRlAYhnUwH9TqQVVNUCqrCzcs3B4_4SbDrMWA03",
            "grant_type": "client_credentials"
          })
        
        }
        let accessToken;
        fetch(tokenEndpoint, tokenOptions).then(t => t.json()).then(json => {
            accessToken = json['access_token'];
            console.log('ACCESS TOKEN', accessToken);
        });
    }
        getToken();
        window.showResp = function(r) {
            bot.innerHTML = '<pre>' + JSON.stringify(responses[r], undefined, 2) + '</pre>';
        }
        window.showUserResp = function(r) {
            ur.innerHTML = '<pre>' + JSON.stringify(responses[r], undefined, 2) + '</pre>';
        }
        function addred(targ) {
            const lis = document.getElementsByTagName('li');
            for (const l of lis) {
                l.classList.remove('red');
            }
            targ.classList.add('red');
        }
        window.showUI = function(u) {
            console.warn('SHOW UI', u);
            modal.classList.contains('active') ? modal.classList.remove('active') : modal.classList.add('active');
            modalContent.innerHTML = responses[u];
        }
    const modal = document.getElementById('floater');
    const modalContent = document.getElementById('modal-content');
    modal.addEventListener('click', function() {
        modal.classList.remove('active');
    });
    const list = document.getElementsByTagName('li');
    const rightCol = document.getElementById('right-col');
    const bot = document.getElementById('bottom');
    const u = document.getElementById('user');
    const ur = document.getElementById('user-resp');
    const arr = Array.from(list);
    arr.map((item) => {
        item.addEventListener('click', function(event) {
            addred(event.target);
            const d = item.dataset.get;
            if (d) {
                rightCol.innerHTML = endpointsLoad[d];
                user.innerHTML = userCalls[d];
                bot.innerHTML = '';
                ur.innerHTML = '';
            }
        });
    });

});
})();