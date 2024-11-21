let totalIncome = 0;
        let totalExpenses = 0;

        function addTransaction() {
            let description = document.getElementById('description').value;
            let amount = parseFloat(document.getElementById('amount').value);

            if (!description || isNaN(amount)) {
                alert("Please enter a valid description and amount.");
                return;
            }

            let transactionList = document.getElementById('transaction-list');
            let transactionItem = document.createElement('div');
            transactionItem.classList.add('transaction-item');

            if (amount >= 0) {
                totalIncome += amount;
                transactionItem.classList.add('income-item');
                transactionItem.innerHTML = `
                    <span>${description}</span>
                    <span>+ PKR${amount.toFixed(2)}</span>
                `;
            } else {
                totalExpenses += Math.abs(amount);
                transactionItem.classList.add('expense-item');
                transactionItem.innerHTML = `
                    <span>${description}</span>
                    <span>- PKR${Math.abs(amount).toFixed(2)}</span>
                `;
            }
            transactionList.appendChild(transactionItem);

            updateUI();
            document.getElementById('description').value = '';
            document.getElementById('amount').value = '';
        }

        function updateUI() {
            let balance = totalIncome - totalExpenses;
            document.getElementById('balance').innerText = balance.toFixed(2);
            document.getElementById('income').innerText = `+ PKR${totalIncome.toFixed(2)}`;
            document.getElementById('expense').innerText = `- PKR${totalExpenses.toFixed(2)}`;

            let balanceDiv = document.getElementById('balance');
            if (balance > 0) {
                balanceDiv.className = 'balance positive';
            } else if (balance < 0) {
                balanceDiv.className = 'balance negative';
            } else {
                balanceDiv.className = 'balance';
            }
        }