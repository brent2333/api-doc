(function() {
    window.addEventListener('DOMContentLoaded', (event) => {
        const acctsURL = "https://brentnetlifytest.com/.netlify/functions/test-accounts";
        const CustIdsURL = "https://brentnetlifytest.com/.netlify/functions/test-customerids";
        const meBox = document.getElementById('me');

        const combine = (acts,ids) => {
            console.warn('COMBINE', acts, ids);
    let obj = {};
    let as = Array.from(acts);
    for (const a of as) {
    a.CustomerIds = ids[a.AccountCode];
    }
    // obj['Accounts'] = as;
    // obj['Ids'] = ids;
    return obj;
}

        const getData = async () => {
            /// ONLY HIT AWS GATEWAY IN HERE
            try {
                const acctsData = await fetch(acctsURL);
                const CustIDsData = await fetch(CustIdsURL);
                const accts = acctsData.json();
                const acctDiv = document.createElement('div');
                const ids = CustIDsData.json();
                acctDiv.innherHTML = acctsData;
                const idsDiv = document.createElement('div');
                idsDiv.innerHTML = CustIDsData;
                let acctArr;
                let idObj;
                console.warn('***', accts, ids );
                accts.then(resp => {
                    acctArr = resp;
                    console.warn('acct', resp);
                    const el = document.createElement('div');
                    el.innerHTML = '<pre>' + JSON.stringify(resp, undefined, 2) + '</pre>'
                    meBox.appendChild(el);
                })
                ids.then(resp => {
                    idObj = resp;
                    console.warn('ids', resp);
                    const el = document.createElement('div');
                    el.innerHTML = '<pre>' + JSON.stringify(resp, undefined, 2) + '</pre>'
                    meBox.appendChild(el);

                    console.warn('***TEST', acctArr, idObj);

                    let test = combine(acctArr, idObj);
                })

            } catch (error) {
                console.error(error);
            }
        }
        getData();

    });

})();