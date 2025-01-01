export default function DeveloperSection() {
  return (
    <div id="developer-section" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Developer Documentation</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">REST API</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <pre className="language-bash">
                <code>
                  {`curl -X GET "https://api.anypay.com/v1/prices" \\
-H "Authorization: Bearer YOUR_API_KEY"`}
                </code>
              </pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">WebSocket Feed</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <pre className="language-javascript">
                <code>
                  {`const ws = new WebSocket(
  'wss://ws.anypay.com/prices'
);

ws.onmessage = (event) => {
  const price = JSON.parse(event.data);
  console.log(price);
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Code Examples</h3>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
              <h4 className="text-lg font-medium mb-2">Python</h4>
              <pre className="language-python">
                <code>
                  {`import requests

API_KEY = 'your_api_key'
response = requests.get(
    'https://api.anypay.com/v1/prices',
    headers={'Authorization': f'Bearer {API_KEY}'}
)

prices = response.json()
btc_price = prices['BTC']['USD']`}
                </code>
              </pre>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-2">Node.js</h4>
              <pre className="language-javascript">
                <code>
                  {`const axios = require('axios');

const API_KEY = 'your_api_key';
const response = await axios.get(
    'https://api.anypay.com/v1/prices',
    {
        headers: { 
            'Authorization': \`Bearer \${API_KEY}\`
        }
    }
);

const prices = response.data;
const btcPrice = prices.BTC.USD;`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/auth/register" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-150"
          >
            Get Your API Key
          </a>
        </div>
      </div>
    </div>
  )
} 