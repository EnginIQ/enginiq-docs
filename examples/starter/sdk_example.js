require('dotenv').config();
const { Engine, SupabaseConnector, listTablesTool, getSchemaTool } = require('enginiq-core');

async function main() {
  // 1. Initialize Engine
  const engine = new Engine();
  
  // 2. Connect to Database (Supabase or Postgres)
  const connector = new SupabaseConnector(
    process.env.SUPABASE_URL || 'https://xyz.supabase.co',
    process.env.SUPABASE_SERVICE_ROLE_KEY || 'service-role-key'
  );
  engine.setConnector(connector);
  
  // 3. Register safe tools
  engine.registerTool(listTablesTool(engine));
  engine.registerTool(getSchemaTool(engine));

  try {
    await engine.connect();
    console.log('--- Connected to EnginiQ Runtime ---');

    // 4. Run a safe tool
    console.log('Listing tables...');
    const result = await engine.runTool('list_tables', {});
    console.log('Result:', result.data);

    await engine.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
