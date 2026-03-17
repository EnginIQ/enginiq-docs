# EnginiQ Starter

The fastest way to give your AI agents safe Postgres capabilities.

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment**:
   Create a `.env` file or use `.enginiqrc.json`:
   ```text
   DATABASE_URL=postgresql://user:pass@host:5432/dbname
   ```

3. **Run the SDK example**:
   ```bash
   node sdk_example.js
   ```

## Included in this starter

- `sdk_example.js`: Shows how to run tools via the `enginiq-core` SDK.
- `migrations/`: A folder for your JSON-based migrations.
- `.enginiqrc.json`: Local configuration for CLI and MCP.

## How it works

EnginiQ doesn't just run SQL. It runs **Tools**. 
Instead of giving your agent `DELETE FROM users`, you give it the `query` tool which is guardrailed, or specific DDL tools like `create_table`.

## Trust Modes

Try changing the trust mode in `sdk_example.js`:
- `dry_run`: Returns the SQL that would be run.
- `read_only`: Blocks any mutating operations.
- `require_approval`: (Hosted) Queues the change for human review.
