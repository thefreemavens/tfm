import{Y as e,B as i,C as n}from"./entry.1e84d79d.js";const p=e((a,o)=>{const t=i().$pb.authStore.isValid;if(!t&&a.path=="/maven/account"||!t&&a.path=="/maven/account/update")return n("/maven/login");if(t&&a.path=="/maven/login"||t&&a.path=="/maven/initiation")return n("/maven/account")});export{p as default};