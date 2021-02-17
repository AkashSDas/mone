---
title: Account Receivable with Doubtful Accounts
description: Understanding the problem with AR when some customer won't pay us
tags:
  - accounting
  - account-receivable
  - doubtful-accounts
lastmod: 2021-02-15T10:17:06-05:00
publishdate: 2021-02-15T10:17:06-05:00
---

---

Problem: How do we account the fact that we make sales to customers on account but not all of them pay us.

> **Revenue is recognized when both**:
>
> - It is earned (goods and services are provided) and
> - It is realized (goods and services are received in cash or somethings that can be converted to cash)

Account receivable are created when payment is due after revenue recognition. But, some customers will not pay us. How do we account for this?

---

## Recognizing Uncollectible Accounts

`Uncollectible accounts` are also known as `doubtful accounts`.

There are 2 methods to account for uncollectible accounts:

> `Direct write-off method`:
>
> - Recognize expense when account is deemed to be uncollectible
> - Used for `tax reporting`, not allowed under `GAAP` and `IFRS`

> `Allowance methods`:
>
> - Required under `GAAP` for `financial reporting` and allowed by IFRS
> - Recognize bad dept expense for estimated future uncollectible amounts from sales during the period

_Why we have to estimate future uncollectable accounts during the same period as the sales?_: The best way to think about this is the `matching principle`. Cost of doing business is periodic (cost of generating revenues), some of the customers won't pay us, so we need to estimate the excepted losses from those defaults now, so we can match them to revenues that we're bookking in this period. Another way to think about it that eventually, when we look at revenues minus expenses, it should equal the cash that we collect whether now or in the future. So by reducing the revenue by this bad debt expense, we're reducing it to an amount that equals the amount of cash that we expect to collect from all the sales that we made during the period.

We create a `Allowance for Doubtful Accounts (XA)` to offset the Account Receivable in the balance sheet. Allowance for Doubtful Accounts is a `contra asset`, so it'll work exactly like `accumulated depreciation`

`Net Accounts Receivable = (Gross) Account Receivable - Allowance for Doubtful Accounts (XA)`

---

## Example

**1. Company A makes $10 in sales on account to each of three customer: James, Ethan, Tony**

```
⏰

Cash(A) + Acc. Rec(Asset) - Allow for DA(XA) = Revenues(SE) - Expense(SE)

At the time of sales, Revenues and Acc. Rec goes up by $30.
```

What companies have to do is they have to keep track of how much each individual customer owes them, they can't just dump it all into an accounts receivables account. So there is a `subsidiary ledger` called an `accounts receivable ledger`, where a company would keep track of each individual customer's account. So that they know what they owe and they can record it when they pay them back. So here we have $10 receivables for James, for Ethan, and for Tony, which add up to the $30 of account receivable which we're going to have on the balance sheet.

```
🔥 Journal Entries

Time of sales
Dr. Acc. Rec (+A)       | 30
    Cr. Sales (+R, +SE) |   30
```

![](/account_receivable_with_doubtful_accounts/img1.png)
![](/account_receivable_with_doubtful_accounts/img2.png)

**2. At the end of period, Company A estimates that $10 of sales will not be collected.**

```
⏰

Cash(A) + Acc. Rec(Asset) - Allow for DA(XA) = Revenues(SE) - Expense(SE)

At the time of sales, Revenues and Acc. Rec goes up by $30.
Adjusting entries, we will have Allow for DA of $10 and that will be Expense of $10

And in A/R ledger for each customer we won't be making any changes since we don't know who will pay and who won't. And this is the reason behind creating Allowance for Doubtful Account in the first place, so that we don't have reduce amount from A/R.

A/R ledger: A/R = A/R(James) + A/R(Tony) + A/R(Ethan)
Time of sales: 30 = 10 + 10 + 10
Adjusting entry: will do nothing
```

```
🔥 Journal Entries

Time of sales
Dr. Acc. Rec (+A)       | 30
    Cr. Sales (+R, +SE) |   30

Adjusting Entries
Dr. Bad Debt Expense(+E, -SE) | 10
    Cr. Allow for DA(+XA, -A) |      10
```

![](/account_receivable_with_doubtful_accounts/img3.png)

_Why do we not simply do the bad debt entry each time we make a sale?_: We do this as an adjusting entry because we don't need to get it right until we put together financial statements. So we wait and see what the sales and receivables are for the period. And then estimate the bad debt and the allowance at the end of the period. When go understand different methods we use for estimating bad debt expense and the allowance for doubtful accounts and we realize why it makes sense to wait until the end of the fiscal period to do these estimates.

**3. In the next period, Company A collects from James and Tony**

```
⏰

Cash(A) + Acc. Rec(Asset) - Allow for DA(XA) = Revenues(SE) - Expense(SE)

At the time of sales: Revenues and Acc. Rec goes up by $30.
Adjusting entries: we will have Allow for DA of $10 and that will be Expense of $10
Collections: here cash will go up by $20, A/R will come down by $20

A/R ledger: A/R = A/R(James) + A/R(Tony) + A/R(Ethan)
Time of sales: 30 = 10 + 10 + 10
Adjusting entry: will do nothing
Collections: (20) = (10) + (10)
```

```
🔥 Journal Entries

Time of sales
Dr. Acc. Rec (+A)       | 30
    Cr. Sales (+R, +SE) |   30

Adjusting Entries
Dr. Bad Debt Expense(+E, -SE) | 10
    Cr. Allow for DA(+XA, -A) |      10

Collections
Dr. Cash(+A)    | 20
    Cr. A/R(-A) |   20
```

![](/account_receivable_with_doubtful_accounts/img4.png)

**4. After 90 days, Company A gives up on collecting from Ethan and writes-off the receivable**

```
⏰

Cash(A) + Acc. Rec(Asset) - Allow for DA(XA) = Revenues(SE) - Expense(SE)

At the time of sales: Revenues and Acc. Rec goes up by $30.
Adjusting entries: we will have Allow for DA of $10 and that will be Expense of $10
Collections: here cash will go up by $20, A/R will come down by $20
Write-off: reduce A/R by $10 and Allow for DA by $10

A/R ledger: A/R = A/R(James) + A/R(Tony) + A/R(Ethan)
Time of sales: 30 = 10 + 10 + 10
Adjusting entry: will do nothing
Collections: (20) = (10) + (10) <= of James & Tony
Write-off: (10) = (10) <= of Ethan, not because he paid us, but because we gave up on Ethan paying us

Now A/R will be 0
```

_Now that we know Ethan is not going to pay us, why don't we have to erase the revenue from the sale to him?_: We don't erase the revenue at this point because we essentially already zeroed out this revenue when we recognized bad debt expense in the period we made the sale to Ethan. We essentially anticipated this loss as part of the bad debt expense. We just didn't know it would be the Ethan that eventually wouldn't pass. If we had a deduction to revenue at the time of the write off we'd actually be subtracting it twice. So the bottom line is that _once you estimate that bad debt expense. You don't need to do anything further to revenues or expenses when the write-off happens because that write-off has already been anticipated in the estimate of the bad debt expense_.

```
🔥 Journal Entries

Time of sales
Dr. Acc. Rec (+A)       | 30
    Cr. Sales (+R, +SE) |   30

Adjusting Entries
Dr. Bad Debt Expense(+E, -SE) | 10
    Cr. Allow for DA(+XA, -A) |      10

Collections
Dr. Cash(+A)    | 20
    Cr. A/R(-A) |   20

Write-off
Dr. Allow for DA(-XA, +A)  | 10
    Cr. A/R(-A)            |    10
```

![](/account_receivable_with_doubtful_accounts/img4.png)

**Final Total: $20 of cash and $20 of pre-tax income**

```
⏰

Cash(A) + Acc. Rec(Asset) - Allow for DA(XA) = Revenues(SE) - Expense(SE)

At the time of sales: Revenues and Acc. Rec goes up by $30.
Adjusting entries: we will have Allow for DA of $10 and that will be Expense of $10
Collections: here cash will go up by $20, A/R will come down by $20
Write-off: reduce A/R by $10 and Allow for DA by $10
Total: 20 (cash) = 30(revenue) - 10(expense)


A/R ledger: A/R = A/R(James) + A/R(Tony) + A/R(Ethan)
Time of sales: 30 = 10 + 10 + 10
Adjusting entry: will do nothing
Collections: (20) = (10) + (10) <= of James & Tony
Write-off: (10) = (10) <= of Ethan, not because he paid us, but because we gave up on Ethan paying us

Now A/R will be 0 because people who owes us have paid or we have written off their account on never collecting it.
```

![](/account_receivable_with_doubtful_accounts/img5.png)

**What if Ethan later pay us?**

After write-off, Ethan pay us $10

```
🔥 Journal Entries

Unexpected Recovery
Dr. Accounts Receivable(+A)   | 10
    Cr. Allow for DA(+XA, -A) |     10
Dr. Cash(+A)                  | 10
    Cr. A/R(-A)               |     10
```

We need to debit accounts receivable for ten to restore Ethan's accounts receivable. We also need to credit the allowance for doubtful accounts for ten to restore the allowance for someone not paying us. Initially we thought it was Ethan that was not going to pay us but we found out Ethan actually came through so we have to put the allowance back to have it there for someone else to not pay us in the future.

_We do not have any more receivables outstanding_: The problem with this example was that we made only three sales and then we were done. In practice, companies would continue to make new credit sales all the time and continue to add to the allowance. So if a company had an unexpected recovery of something they wrote off. They would just restore the allowance, so it would be there for when someone else defaults on their sale and if enough on expected recoveries happen and the allowance gets too big. The company can just reduce the amount of bad debt expense they put in. Which would make sense because their collections are becoming better than they thought they would be.

![](/account_receivable_with_doubtful_accounts/img5.png)
