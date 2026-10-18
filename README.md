
# notion-javascript

This [SDK](https://github.com/sdk-fabric/notion-javascript) is managed by the [SDK Fabric](https://sdk-fabric.org/) project, a global infrastructure to
automatically generate SDKs for every API.

You can find more information about this SDK at [TypeHub](https://typehub.cloud/):
https://app.typehub.cloud/d/sdkfabric/notion

## Usage

```typescript
const client = Client::build('[access_token]');

// Creates and appends new children blocks to the parent block or page specified.
const response = await client.block().appendChildren("Notion-Version", "block_id", new Append_Block_Children_Request());

// Moves a block (including a page) to the trash.
const response = await client.block().delete("Notion-Version", "block_id");

// Retrieves a Block object using the ID specified.
const response = await client.block().get("Notion-Version", "block_id");

// Returns a paginated array of child block objects contained in the block (or page) using the ID specified.
const response = await client.block().getChildren("Notion-Version", "block_id", 1, "start_cursor");

// Updates the content of a block based on its type, or moves it to/from the trash.
const response = await client.block().update("Notion-Version", "block_id", new Update_Block_Request());

// Creates an additional data source in an existing database.
const response = await client.dataSource().create("Notion-Version", new Create_Data_Source_Request());

// Retrieves a data source object, including its property schema.
const response = await client.dataSource().get("Notion-Version", "data_source_id");

// Creates a database and its initial data source as a child of a page or the workspace.
const response = await client.database().create("Notion-Version", new Create_Database_Request());

// Retrieves a database object, a container for one or more data sources, for a provided database ID.
const response = await client.database().get("Notion-Version", "database_id");

// Updates the attributes (title, description, icon, cover, parent, inline, trash and lock status) of a database.
const response = await client.database().update("Notion-Version", "database_id", new Update_Database_Request());

// Creates a new page as a child of an existing page or data source.
const response = await client.page().create("Notion-Version", "filter_properties", new Create_Page_Request());

// Retrieves a Page object using the ID specified.
const response = await client.page().get("Notion-Version", "filter_properties", "page_id");

// Retrieves the content of a page rendered as enhanced markdown.
const response = await client.page().getMarkdown("Notion-Version", true, "page_id");

// Retrieves a page property item.
const response = await client.page().getProperty("Notion-Version", "page_id", 1, "property_id", "start_cursor");

// Moves an existing page to a new parent page or data source.
const response = await client.page().move("Notion-Version", "page_id", new Move_Page_Request());

// Updates page properties, icon, cover, lock state or trash status (in_trash).
const response = await client.page().update("Notion-Version", "filter_properties", "page_id", new Update_Page_Request());

// Updates or replaces content in a page using enhanced markdown.
const response = await client.page().updateMarkdown("Notion-Version", "page_id", new Update_Page_Markdown_Request());

// Retrieves a User using the ID specified.
const response = await client.user().get("Notion-Version", "user_id");

// Returns a paginated list of Users for the workspace.
const response = await client.user().getAll("Notion-Version", 1, "start_cursor");

// Retrieves the bot User associated with the API token provided in the authorization header.
const response = await client.user().getMe("Notion-Version");
```
