
# notion-javascript

This [SDK](https://github.com/sdk-fabric/notion-javascript) is managed by the [SDK Fabric](https://sdk-fabric.org/) project, a global infrastructure to
automatically generate SDKs for every API.

You can find more information about this SDK at [TypeHub](https://typehub.cloud/):
https://app.typehub.cloud/d/sdkfabric/notion

## Usage

```typescript
const client = Client::build('[access_token]');

// Returns a paginated list of Users for the workspace.
const response = await client.user().getAll("Notion-Version", "start_cursor", 1);

// Retrieves a User using the ID specified.
const response = await client.user().get("Notion-Version", "user_id");

// Retrieves a database object — information that describes the structure and columns of a database — for a provided database ID.
const response = await client.database().get("Notion-Version", "database_id");

// Retrieves a Page object using the ID specified.
const response = await client.page().get("page_id");

// Creates a new page that is a child of an existing page or database.
const response = await client.page().create(new Page());
```
