import { responses } from "./responses.js";
import { endpointsLoad } from "./endpointsLoad.js";
import { userCalls } from "./userCalls.js";

(function() {
    window.addEventListener('DOMContentLoaded', (event) => {
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