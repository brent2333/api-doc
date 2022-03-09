(function() {
    window.addEventListener('DOMContentLoaded', (event) => {
        const acctsURL = "https://brentnetlifytest.com/.netlify/functions/test-accounts";
        const CustIdsURL = "https://brentnetlifytest.com/.netlify/functions/test-customerids";
        const meBox = document.getElementById('me');

        const getData = async () => {
            /// ONLY HIT AWS GATEWAY IN HERE
            try {
                const acctsData = await fetch(acctsURL);
                const CustIDsData = await fetch(CustIdsURL);
                const acctDiv = document.createElement('div');
                acctDiv.innherHTML = acctsData;
                const idsDiv = document.createElement('div');
                idsDiv.innerHTML = CustIDsData;
                meBox.appendChild(acctDiv);
                meBox.appendChild(idsDiv);
                
            } catch (error) {
                console.error(error);
            }
        }
        getData();

    });

})();