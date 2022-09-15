# Ghops Action

This action executes a series of operations over a series of resources in Github in a declarative way using
a configuration file.

## Inputs

## `ghops-file`

**Required** The path of the ghops.json file containing the desired state. Default `"ghops.json"`.

## `github-token`

**Required** A Github token in order to be allowed to apply the required operations.

## Example usage

```yaml
uses: my-devops-playground/ghops-action@v1.0.0
with:
  ghops-file: '.github/ghops.json'
  github-token: 'xxxxxxxxx'
```