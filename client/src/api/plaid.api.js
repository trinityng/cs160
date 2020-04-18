import axios from 'axios';
import {
  plaidLoginSuccessfully,
  plaidLoginFailed,
  plaidTransactionsSuccess,
  plaidTransactionsFailed,
  plaidTransactionsEachSuccess,
  plaidTransactionsEachFailed,
  plaidCategoriesSuccess,
  plaidCategoriesFailed,
  plaidNetWorthSuccess,
  plaidNetWorthFailed,
  plaidMonthlyExpensesSuccess,
  plaidMonthlyExpensesFailed,
  plaidBillsSuccess,
  plaidBillsFailed,
  plaidBillUpdateFailed,
  plaidBillUpdateSuccess,
} from '../store/actions/plaid.action';
import {
  HOST,
  PLAID_ACCESS_TOKEN_URI,
  PLAID_TRANSACTIONS_URI,
  PLAID_TRANSACTIONS_EACH_URI,
  PLAID_CATEGORIES_URI,
  PLAID_NET_WORTH_URI,
  PLAID_MONTHLY_EXPENSES_URI,
  PLAID_BILLS_URI,
  PLAID_BILLS_DATE_UPDATE,
} from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const plaidLogin = userData => dispatch => {
  //   console.log('userData sent to plaid login: ', userData);
  const config = { headers: { Authorization: `Bearer ${userData.token}` } };
  axios
    .post(`${HOST}${PLAID_ACCESS_TOKEN_URI}`, userData, config)
    .then(res => {
      //   console.log('res: ', res);
      dispatch(plaidLoginSuccessfully(res.data));
    })
    .catch(err => {
      console.log('err: ', err.response.data);
      dispatch(plaidLoginFailed(err));
    });
};

export const plaidTransactions = userData => dispatch => {
  //   console.log('userData sent to plaidTransactions: ', userData);
  const config = { headers: { Authorization: `Bearer ${userData.token}` } };
  axios
    .get(`${HOST}${PLAID_TRANSACTIONS_URI}`, userData, config)
    .then(res => {
      //   console.log('res: ', res.data);
      dispatch(plaidTransactionsSuccess(res.data));
    })
    .catch(err => {
      console.log('err: ', err.response.data);
      dispatch(plaidTransactionsFailed(err));
    });
};

export const plaidTransactionsEach = userData => dispatch => {
  //   console.log('userData sent to plaidTransactionsEach: ', userData);
  const config = { headers: { Authorization: `Bearer ${userData.token}` } };
  axios
    .get(`${HOST}${PLAID_TRANSACTIONS_EACH_URI}`, userData, config)
    .then(res => {
      //   console.log('res: ', res.data);
      dispatch(plaidTransactionsEachSuccess(res.data));
    })
    .catch(err => {
      console.log('err: ', err.response.data);
      dispatch(plaidTransactionsEachFailed(err));
    });
};

export const plaidCategories = userData => dispatch => {
  //   console.log('userData sent to plaidCategories: ', userData);
  const config = { headers: { Authorization: `Bearer ${userData.token}` } };
  axios
    .get(`${HOST}${PLAID_CATEGORIES_URI}`, userData, config)
    .then(res => {
      //   console.log('res: ', res.data);
      dispatch(plaidCategoriesSuccess(res.data));
    })
    .catch(err => {
      console.log('err: ', err.response.data);
      dispatch(plaidCategoriesFailed(err));
    });
};

export const plaidNetWorth = userData => dispatch => {
  const config = { headers: { Authorization: `Bearer ${userData.token}` } };
  //   console.log('userData sent to plaidNetWorth: ', userData, config);
  axios
    .get(`${HOST}${PLAID_NET_WORTH_URI}`, userData, config)
    .then(res => {
      //   console.log('res: ', res.data);
      dispatch(plaidNetWorthSuccess(res.data));
    })
    .catch(err => {
      console.log('err: ', err.response.data);
      dispatch(plaidNetWorthFailed(err));
    });
};

export const plaidMonthlyExpenses = userData => dispatch => {
  //   console.log('userData sent to plaidMonthlyExpenses: ', userData);
  const config = { headers: { Authorization: `Bearer ${userData.token}` } };
  axios
    .get(`${HOST}${PLAID_MONTHLY_EXPENSES_URI}`, userData, config)
    .then(res => {
      //   console.log('res: ', res.data);
      dispatch(plaidMonthlyExpensesSuccess(res.data));
    })
    .catch(err => {
      console.log('err: ', err.response.data);
      dispatch(plaidMonthlyExpensesFailed(err));
    });
};

export const plaidBills = userData => dispatch => {
  console.log('userData sent to plaidBills: ', userData);
  const config = { headers: { Authorization: `Bearer ${userData.token}` } };
  axios
    .get(`${HOST}${PLAID_BILLS_URI}`, userData, config)
    .then(res => {
      console.log('bills res: ', res.data);
      dispatch(plaidBillsSuccess(res.data));
    })
    .catch(err => {
      console.log('bills err: ', err.response.data);
      dispatch(plaidBillsFailed(err));
    });
};

export const test = userData => dispatch => {
  //   console.log('userData sent to plaidBills: ', userData);
  const config = { headers: { Authorization: `Bearer ${userData.token}` } };
  axios
    .get(`${HOST}/plaid/test/`, userData, config)
    .then(res => {
      //   console.log('res: ', res.data);
      //   dispatch(plaidBillsSuccess(res.data));
    })
    .catch(err => {
      console.log('err: ', err.response);
      //   dispatch(plaidBillsFailed(err));
    });
};

export const changeDueDate = userData => dispatch => {
  console.log('userData sent to change date: ', userData);
  const config = { headers: { Authorization: `Bearer ${userData.token}` } };
  console.log(config);
  axios
    .post(`${HOST}${PLAID_BILLS_DATE_UPDATE}`, userData, config)
    .then(res => {
      console.log('res: ', res.data);
      dispatch(plaidBillUpdateSuccess(res.data));
    })
    .catch(err => {
      console.log('err: ', err.response);
      dispatch(plaidBillUpdateFailed(err));
    });
};
