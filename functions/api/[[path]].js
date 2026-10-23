// ============================================
// [[path]].js — API 路由總管 (舊版)
// ============================================
import { initConfig } from './_config.js';
import { handleAdminFamiliesGet, handleAdminFamiliesPost, handleAdminInitFamily, handleAdminMigrate } from './_admin.js';
import { handleBankAccountsGet, handleBankAccountsPost, handleBankTransactionsGet, handleBankTransactionsPost, handleClearBankBalances } from './_bank.js';
import { handleLookupFamily, handleFamilySettingsGet, handleFamilySettingsPost, handleFamilyAccountsGet, handleFamilyAccountsPost } from './_family.js';
import { handleInsuranceSync } from './_insurance.js';
import { handlePersonalIncomeGet, handlePersonalIncomePost, handleMemberAdvancesGet, handleMemberAdvancesPost } from './_personal.js';
import { handlePlatformSettingsGet, handlePlatformSettingsPost, handlePlatformDefaultsGet, handlePlatformDefaultsPost } from './_platform.js';
import { handleSummary, handleAnnualSummary, handleSettlementsYear } from './_summary.js';
import { handleEntityPost } from './_entity.js';
import { jsonResponse } from './_config.js';

export async function onRequestOptions({ env }) {
  initConfig(env);
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}

export async function onRequestGet(context) {
  initConfig(context.env);
  const url = new URL(context.request.url);
  const path = url.pathname;

  if (path === '/api/family-settings') return handleFamilySettingsGet(context.request);
  if (path === '/api/family-accounts') return handleFamilyAccountsGet(context.request);
  if (path === '/api/admin-families') return handleAdminFamiliesGet(context.request);
  if (path === '/api/summary') return handleSummary(context.request);
  if (path === '/api/annual-summary') return handleAnnualSummary(context.request);
  if (path === '/api/settlements-year') return handleSettlementsYear(context.request);
  if (path === '/api/platform-settings') return handlePlatformSettingsGet(context.request);
  if (path === '/api/platform-defaults') return handlePlatformDefaultsGet(context.request);
  if (path === '/api/bank-accounts') return handleBankAccountsGet(context.request);
  if (path === '/api/bank-transactions') return handleBankTransactionsGet(context.request);
  if (path === '/api/personal-income') return handlePersonalIncomeGet(context.request);
  if (path === '/api/member-advances') return handleMemberAdvancesGet(context.request);

  return jsonResponse({ ok: false, error: 'NOT_FOUND', message: `未知的 GET API：${path}` }, 404);
}

export async function onRequestPost(context) {
  initConfig(context.env);
  const url = new URL(context.request.url);
  const path = url.pathname;

  if (path === '/api/lookup-family') return handleLookupFamily(context.request);
  if (path === '/api/family-settings') return handleFamilySettingsPost(context.request);
  if (path === '/api/family-accounts') return handleFamilyAccountsPost(context.request);
  if (path === '/api/admin-families') return handleAdminFamiliesPost(context.request);
  if (path === '/api/admin-init-family') return handleAdminInitFamily(context.request);
  if (path === '/api/admin-migrate') return handleAdminMigrate(context.request);
  if (path === '/api/platform-settings') return handlePlatformSettingsPost(context.request);
  if (path === '/api/platform-defaults') return handlePlatformDefaultsPost(context.request);
  if (path === '/api/bank-accounts') return handleBankAccountsPost(context.request);
  if (path === '/api/bank-transactions') return handleBankTransactionsPost(context.request);
  if (path === '/api/clear-bank-balances') return handleClearBankBalances(context.request);
  if (path === '/api/personal-income') return handlePersonalIncomePost(context.request);
  if (path === '/api/member-advances') return handleMemberAdvancesPost(context.request);
  if (path === '/api/insurance-sync') return handleInsuranceSync(context.request);
  if (path === '/api/entity-create') return handleEntityPost(context.request);

  return jsonResponse({ ok: false, error: 'NOT_FOUND', message: `未知的 POST API：${path}` }, 404);
}

/* ═══ EOF ═══
F: functions/api/[[path]].js
V: 1792900000
W: ai-system-20261023-010#1
═══ */