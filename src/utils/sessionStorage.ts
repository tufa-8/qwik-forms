function set(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  function get(key: string): any {
    try {
      return JSON.parse(sessionStorage.getItem(key) as string);
    } catch (e) {
      return null;
    }
  }

  function remove(key: string): void {
    sessionStorage.removeItem(key);
  }

  function clear(): void {
    sessionStorage.clear();
  }

  export {
    set,
    get,
    remove,
    clear
  }