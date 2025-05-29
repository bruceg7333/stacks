### Primitive Data Types
- `int` an 128-bit numbers that can be positive and negative
    - example `(+ 2 3)`
- `uint` unassigned integers , are also 128-bit number that **can only be positive**
    - the minimum is 0, the maximum value `2**128 - 1`
    - example `(+ u2 u3)`
- `bool`
    - and not or
    - `(not true)`
    - `(and true true true)`
    - `(or false true false)`
`Principals`: are a special data type that are **blockchain specific**, they represent **Stacks addresses** on the blockchain
    - it is an unique identifier used to represent an account or smart contract
    - **Standard Principles**: for wallet address which backed by a private key
        - `'ST1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE`
    - **Contract Principles**: for address backed by code
        - `'ST1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE.my-awesome-contract`

```
;; get balance of a standard principal
(stx-get-balance 'ST1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE)

;; get balance of a contract principal
(stx-get-balance 'ST1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE.my-contract)
```

### Sequence Data Types
- Buffers: unstructured bytes data, represented in hexadecimal, always start with **Ox** prefix
    - `0x68656c6c6f21`
- Strings: a sequence of characters, there are two types
    - ASCII Strings: are limited to only containing basic Latin characters(alphabets, numbers, symbols like dashes and dots)
        - example `"this is an ASCII string"`
    - UTF-8 Strings: can contain much more things like Emojis and characters from non-english languages
        - `u"this is UTF-8 string ❤️"`
- Lists
    ```
    (list 1 2 3 4 5) ;; Valid

    (list "Hello" "World" "!") ;; Valid

    (list u5 10 "Hello") ;; Invalid

    ;; apply the `not` operator to the entire list
    (map not (list true true false false)) ;; result in (list false false true true)
    ```
    - `fold` is like reduce in JavaScript,
        ```
        ;; recursively "fold" the list and keep adding the numbers together
        ;; with an initial result value of 0
        (fold + (list 1 2 3 4) 0) ;; return is 10
        ```
    - `len` to figure out the length of a sequence
    