fixture`Fixture.meta`
    .page`https://devexpress.github.io/testcafe/example/`
    .meta('key1', 'value1');

test('My test', async () => {
    /* ... */
});

fixture`Fixture.meta object`
    .page`https://devexpress.github.io/testcafe/example/`
    .meta({ key1: 'value1', key2: 'value2', key3: 'value3' });

test('My test', async () => {
    /* ... */
});
