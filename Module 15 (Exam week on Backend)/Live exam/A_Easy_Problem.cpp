/**        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ (In the name of God, the Most Gracious, the Most Merciful.)       */
/*
      Institution : Hajee Mohammad Danesh Science and Technology University,Dinajpur,Bangladesh.
      Name        : Hamday Rabby Hossain Auni
      Email       : hamdayrabby385@gmail.com
*/

/*
   Problem link :
   verdict :
*/
#include<bits/stdc++.h>
#define ll long long int
#define sz(x) ((long long) x.size())
#define all(x) (x).begin(), (x).end()
#define endl '\n'
#include <numeric>
using namespace std;

/*int reverse(int num)

{
  int rn = 0;
  int re;

  while (num != 0) {
    re = num % 10;
    rn = rn * 10 + re;
    num /= 10;
  }

  return rn;
}
*/
const ll mx=2e5+12;
ll ar[mx];
ll presum[mx];
ll freq[mx]= {0};
ll mod[mx];
ll lcm(int a, int b)
{
    int greater = max(a, b);
    int smallest = min(a, b);
    for (int i = greater; ; i += greater)
    {
        if (i % smallest  == 0)
            return i;
    }
}
bool isPrime(int num)
{
    if (num <= 1)
    {
        return false;
    }
    for (int i = 2; i * i <= num; ++i)
    {
        if (num % i == 0)
        {
            return false;
        }
    }
    return true;
}
void solve()
{
    ll a,b,c,n,i,ans=0;

    cin>>n>>a>>b>>c;
    ll na=n,nb=n;
    if(na>=a && nb>=b)
    {
        ans+=a+b;
        na-=a;
        nb-=b;
        if(na+nb>=c)
        {
            ans+=c;
        }
        else
        {
            ans+=(na+nb);
        }
        
    }
    else if(max(a,b)>n)
    {
        if(a>n)
        {
            ans+=n+b;
            na=0;
            nb-=b;
            if(na+nb>=c)
            {
                ans+=c;
            }
            else
            {
                ans+=(na+nb);
            }
        }
        else
        {
            ans+=n+a;
            nb=0;
            na-=a;
            if(na+nb>=c)
            {
                ans+=c;
            }
            else
            {
                ans+=(na+nb);
            }
        }   
    }

    cout<<ans<<endl;
    

}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll i,j,k,n,b,c=0,s=0,sum=0,x,t;

    cin>>t;
    while(t--)
    solve();




    return 0;
}


/*"Success isn't permanent, failure isn't fatal,
it's the courage to continue that counts"*/
